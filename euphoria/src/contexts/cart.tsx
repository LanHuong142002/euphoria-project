'use client';

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
  useEffect,
  useTransition,
  useRef,
  useMemo,
} from 'react';
import { useRouter } from 'next/navigation';

// Actions
import { getCart, addToCart, updateCartById, deleteCart } from '@/actions';

// Types
import { Cart, CartPayload } from '@/types';

// Hooks
import { useToast } from '@/hooks';

// Utils
import {
  getItemQuantity,
  calculateCartTotals,
  findMatchingItem,
} from '@/utils';

interface CartContextType {
  cart: Cart[];
  isPending: boolean;
  isLoading: boolean;
  isCartEmpty: boolean;
  totalItems: number;
  totalPrice: number;
  error: string | null;
  refreshCart: () => void;
  clearCart: () => Promise<void>;
  removeItem: (id: string) => Promise<void>;
  addItem: (payload: CartPayload) => Promise<void>;
  updateItem: (id: string, payload: CartPayload) => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const router = useRouter();
  const { success, error: errorToast } = useToast();
  const [isPending, startTransition] = useTransition();

  const [cart, setCart] = useState<Cart[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasInitialized, setHasInitialized] = useState(false);
  const debouncedUpdateRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const { totalItems, totalPrice } = calculateCartTotals(cart);
  const isCartEmpty = !cart || cart.length === 0;

  /**
   * Handle cart error
   *
   * @param error - The error to handle
   * @returns void
   */
  const handleCartError = useCallback(
    (error: string | null) => {
      if (error) {
        setError(error);
        errorToast({ title: 'Error', description: error });
        return;
      }
    },
    [errorToast],
  );

  /**
   * Set cart item in local state
   *
   * @param payload - The payload to set the cart item
   * @param id - The id of the cart item to set
   * @returns void
   */
  const handleSetCartQuantity = useCallback(
    (payload: CartPayload, id: string) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id
            ? {
                ...item,
                attributes: {
                  ...item.attributes,
                  quantity: payload.quantity,
                },
              }
            : item,
        ),
      );
    },
    [],
  );

  /**
   * Load cart data
   *
   * @param forceReload - Whether to force reload the cart
   * @returns void
   */
  const loadCart = useCallback(
    async (forceReload = false) => {
      if (!forceReload && hasInitialized) return;

      setIsLoading(true);
      setError(null);

      try {
        const response = await getCart();

        if (response.error) {
          setError(response.error);
          return;
        }

        const cartData = response.data || [];
        setCart(cartData);
        setHasInitialized(true);
      } finally {
        setIsLoading(false);
      }
    },
    [hasInitialized],
  );

  const fetchCart = useCallback(() => loadCart(), [loadCart]);
  const refreshCart = useCallback(() => {
    setHasInitialized(false);
    return loadCart(true);
  }, [loadCart]);

  /**
   * Update cart item with debouncing - doesn't trigger loading states
   *
   * @param id - The id of the cart item to update
   * @param payload - The payload to update the cart item
   * @returns void
   */
  const updateItem = useCallback(
    async (id: string, payload: CartPayload) => {
      // Clear existing timeout
      if (debouncedUpdateRef.current) {
        clearTimeout(debouncedUpdateRef.current);
      }

      // Set new timeout for debounced update
      debouncedUpdateRef.current = setTimeout(async () => {
        startTransition(async () => {
          setError(null);
          const { data, error } = await updateCartById(id, payload);

          handleCartError(error);

          if (data) {
            if (Array.isArray(data)) {
              setCart(data);
            } else {
              // For single item updates, update the specific item in local state
              handleSetCartQuantity(payload, id);
            }
          }
        });
      }, 500);
    },
    [handleCartError, handleSetCartQuantity],
  );

  /**
   * Add item to cart
   *
   * @param payload - The payload to add to the cart
   * @returns void
   */
  const addItem = useCallback(
    async (payload: CartPayload) => {
      if (!hasInitialized) {
        await fetchCart();
      }
      const existingItem = findMatchingItem(cart, payload);

      if (existingItem) {
        // If item exists, increment quantity by 1 (regardless of payload.quantity)
        const updatedPayload = {
          ...payload,
          quantity: getItemQuantity(existingItem) + 1,
        };

        startTransition(async () => {
          setError(null);
          const { data, error } = await updateCartById(
            existingItem.id,
            updatedPayload,
          );

          handleCartError(error);

          if (data) {
            if (Array.isArray(data)) {
              setCart(data);
            } else {
              handleSetCartQuantity(updatedPayload, existingItem.id);
            }
          }
          success({ title: 'Success', description: 'Item updated in cart' });
          router.refresh();
        });
      } else {
        // Add new item if it doesn't exist
        startTransition(async () => {
          setError(null);
          const { data, error } = await addToCart(payload);

          handleCartError(error);

          if (data) {
            if (Array.isArray(data)) {
              setCart(data);
            } else {
              // For single item, add it to local state directly
              // Make sure the data has the correct structure
              const newItem = data as Cart;
              setCart((prevCart) => [...prevCart, newItem]);
            }
          }
          success({ title: 'Success', description: 'Item added to cart' });
          router.refresh();
        });
      }
    },
    [
      cart,
      fetchCart,
      handleCartError,
      handleSetCartQuantity,
      hasInitialized,
      router,
      success,
    ],
  );

  /**
   * Remove item from cart
   *
   * @param id - The id of the item to remove
   * @returns void
   */
  const removeItem = useCallback(
    async (id: string) => {
      startTransition(async () => {
        setError(null);

        const { error } = await deleteCart(id);

        handleCartError(error);

        // Remove item from local state
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
        success({ title: 'Success', description: 'Item removed from cart' });
        router.refresh();
      });
    },
    [handleCartError, success, router],
  );

  /**
   * Clear entire cart
   *
   * @returns void
   */
  const clearCart = useCallback(async () => {
    startTransition(async () => {
      setError(null);
      await Promise.all(cart.map((item) => deleteCart(item.id)));
      setCart([]);
      router.refresh();
    });
  }, [cart, router, startTransition]);

  // Load cart on mount
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const contextValue = useMemo(
    () => ({
      cart,
      isPending,
      isLoading,
      isCartEmpty,
      error,
      totalItems,
      totalPrice,
      refreshCart,
      addItem,
      updateItem,
      removeItem,
      clearCart,
    }),
    [
      cart,
      isPending,
      isLoading,
      isCartEmpty,
      error,
      totalItems,
      totalPrice,
      refreshCart,
      addItem,
      updateItem,
      removeItem,
      clearCart,
    ],
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }

  return context;
};
