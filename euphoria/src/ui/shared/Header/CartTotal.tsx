'use client';

import Link from 'next/link';

// Constants
import { ROUTES } from '@/constants';

// Components
import { Button } from '../../components/common/Button';
import { Typography } from '../../components/common/Typography';

// Icons
import { ShoppingCartIcon } from '../../icons/ShoppingCartIcon';

// Contexts
import { useCart } from '@/contexts';

export const CartTotal = () => {
  const { cart } = useCart();

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
      {cart.length > 0 && (
        <div className="absolute -top-4 -right-3 lg:-top-2 lg:-right-2 bg-background-error rounded-full w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center">
          <Typography
            as="span"
            color="tertiary"
            fontSize="xs"
            className="lg:text-sm"
          >
            {cart.length}
          </Typography>
        </div>
      )}
    </Link>
  );
};
