'use client';

import Link from 'next/link';

// Constants
import { ROUTES } from '@/constants';

// Components
import { Button } from '../../components/common/Button';

// Icons
import { ShoppingCartIcon } from '../../icons/ShoppingCartIcon';

export const CartTotal = () => {
  return (
    <Link href={ROUTES.CART} className="relative">
      <Button
        color="icon"
        size="icon"
        variant="primary"
        className="w-8 h-8 lg:w-11 lg:h-11 p-2"
      >
        <ShoppingCartIcon />
      </Button>
      <div className="absolute -top-4 -right-3 lg:-top-2 lg:-right-2 bg-background-error rounded-full w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center">
        <span className="text-text-tertiary text-xs lg:text-sm">4</span>
      </div>
    </Link>
  );
};
