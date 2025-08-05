'use client';

// Components
import { CartItem } from '@/ui/components/CartItem';

// Types
import { Cart } from '@/types';

// Utils
import { getItemPrice, getItemQuantity } from '@/utils';

interface CartItemRowProps {
  item: Cart;
  cart: Cart[];
  onRemoveItem: (id: string) => void;
  onQuantityChange: (id: string, quantity: number) => void;
}

export const CartItemRow = ({
  item,
  cart,
  onQuantityChange,
  onRemoveItem,
}: CartItemRowProps) => {
  const { attributes } = item;
  const { product, color = '', size = '' } = attributes || {};
  const {
    id: productId,
    attributes: { name: productName = '', images = [] },
  } = product?.data || {};

  const itemPrice = getItemPrice(item);
  const itemQuantity = getItemQuantity(item);
  const isLastItem = item === cart[cart.length - 1];
  const productCart = {
    id: productId,
    name: productName,
    color,
    size,
    price: itemPrice,
    images: images || [],
  };

  const handleRemoveItem = () => {
    onRemoveItem(item.id);
  };

  const handleQuantityChange = (newQuantity: number) => {
    onQuantityChange(item.id, newQuantity);
  };

  return (
    <CartItem
      product={productCart}
      quantity={itemQuantity}
      onQuantityChange={handleQuantityChange}
      onRemove={handleRemoveItem}
      hasBorder={!isLastItem}
    />
  );
};
