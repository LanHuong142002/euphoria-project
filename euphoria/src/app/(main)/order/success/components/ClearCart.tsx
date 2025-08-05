'use client';

import { useEffect } from 'react';

// Hooks
import { useCart } from '@/contexts';

interface Props {
  isClearCart: boolean;
}

export const ClearCart = ({ isClearCart }: Props) => {
  const { clearCart, isCartEmpty } = useCart();

  useEffect(() => {
    if (isClearCart && !isCartEmpty) {
      clearCart();
    }
  }, [clearCart, isCartEmpty, isClearCart]);

  return null;
};
