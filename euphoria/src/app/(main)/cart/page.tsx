'use client';

import { lazy, Suspense, useState } from 'react';

// Contexts
import { useCart } from '@/contexts';

// Components
import { Summary } from './components/Summary';
import { EmptyCart } from './components/EmptyCart';
import { CartItemRow } from './components/CartItemRow';
import { CartBreadcrumb } from './components/CartBreadcrumb';
import { CartSkeleton } from './components/CartSkeleton';
import { TableHeader } from './components/TableHeader';

const ModalConfirm = lazy(() =>
  import('@/ui/components/ModalConfirm').then((mod) => ({
    default: mod.ModalConfirm,
  })),
);

const CartPage = () => {
  const [id, setId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const {
    cart,
    removeItem,
    updateItemImmediate,
    totalPrice,
    isLoading,
    isCartEmpty,
  } = useCart();

  if (isLoading) {
    return <CartSkeleton />;
  }

  if (isCartEmpty) {
    return <EmptyCart />;
  }

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    const item = cart.find((cartItem) => cartItem.id === itemId);
    if (item) {
      updateItemImmediate(itemId, {
        product: item.attributes.product.data.id,
        color: item.attributes.color,
        size: item.attributes.size,
        quantity: newQuantity,
      });
    }
  };

  const handleOpenModal = (id: string) => {
    setId(id);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleConfirmRemoveItem = () => {
    removeItem(id);
    setIsOpen(false);
  };

  return (
    <div className="pb-25">
      <div className="container mx-auto py-[50px] px-4">
        <CartBreadcrumb />
      </div>

      <div>
        {/* Cart Items Header */}
        <TableHeader />

        {/* Cart Items */}
        <div className="container mx-auto pt-5 pb-25">
          {cart.map((item) => (
            <CartItemRow
              key={`cart-item-${item.id}`}
              item={item}
              cart={cart}
              onQuantityChange={handleQuantityChange}
              onRemoveItem={handleOpenModal}
            />
          ))}
        </div>

        {/* Order Summary */}
        <Summary totalPrice={totalPrice} />

        <Suspense fallback={null}>
          <ModalConfirm
            isOpen={isOpen}
            title="Remove Item"
            description="Are you sure you want to remove this item from your cart?"
            onCancel={handleCloseModal}
            onConfirm={handleConfirmRemoveItem}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default CartPage;
