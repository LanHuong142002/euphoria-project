'use client';

import { lazy, Suspense, useState } from 'react';

// Contexts
import { useCart } from '@/contexts';

// Components
import { Summary } from './Summary';
import { EmptyCart } from './EmptyCart';
import { CartItemRow } from './CartItemRow';
import { CartBreadcrumb } from './CartBreadcrumb';
import { CartSkeleton } from './CartSkeleton';
import { TableHeader } from './TableHeader';

const ModalConfirm = lazy(() =>
  import('@/ui/components/ModalConfirm').then((mod) => ({
    default: mod.ModalConfirm,
  })),
);

export const Content = () => {
  const [id, setId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const { cart, removeItem, updateItem, totalPrice, isLoading, isCartEmpty } =
    useCart();

  // Show skeleton on first load (when isLoading is true)
  if (isLoading) {
    return <CartSkeleton />;
  }

  // Show empty cart only after loading is complete and cart is actually empty
  if (isCartEmpty) {
    return <EmptyCart />;
  }

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    const item = cart.find((cartItem) => cartItem.id === itemId);
    if (item) {
      updateItem(itemId, {
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
        <div
          role="table"
          aria-label="Cart items"
          aria-rowcount={cart.length + 1}
        >
          {/* Cart Items Header */}
          <TableHeader />

          {/* Cart Items */}
          <div className="container mx-auto pt-5 pb-25" role="rowgroup">
            {cart.map((item, index) => (
              <CartItemRow
                key={`cart-item-${item.id}`}
                item={item}
                cart={cart}
                onQuantityChange={handleQuantityChange}
                onRemoveItem={handleOpenModal}
                ariaRowIndex={index + 2}
                role="row"
              />
            ))}
          </div>
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
