'use client';

// Components
import { CartItem, CartItemProps } from '@/ui/components/CartItem';

// Types
import { Cart } from '@/types';

// Utils
import { getItemPrice, getItemQuantity } from '@/utils';

interface CartItemRowProps
  extends Omit<CartItemProps, 'onQuantityChange' | 'product'> {
  ariaRowIndex: number;
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
  role,
  ariaRowIndex,
}: CartItemRowProps) => {
  const { attributes } = item;
  const { product, color = '', size = '' } = attributes || {};
  const productData = product?.data || {};
  const {
    id: productId,
    attributes: { name: productName = '', images = [] } = {},
  } = productData;

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
      ariaRowIndex={ariaRowIndex}
      role={role}
    />
  );
};
