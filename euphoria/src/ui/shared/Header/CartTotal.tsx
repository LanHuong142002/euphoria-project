'use client';

import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  const goToCart = () => {
    router.push(ROUTES.CART);
  };

  return (
    <div className="relative">
      <Button
        color="icon"
        size="icon"
        variant="primary"
        className="w-8 h-8 lg:w-11 lg:h-11 p-2"
        onClick={goToCart}
        tabIndex={-1}
        aria-label={
          cart.length > 0
            ? `Shopping cart with ${cart.length} item${cart.length === 1 ? '' : 's'}`
            : 'Shopping cart (empty)'
        }
      >
        <ShoppingCartIcon aria-hidden="true" />
      </Button>
      {cart.length > 0 && (
        <div
          className="absolute -top-2 -right-2 lg:-top-2 lg:-right-2 bg-background-error rounded-full w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center"
          aria-hidden="true"
        >
          <Typography
            as="span"
            color="tertiary"
            fontSize="xs"
            className="lg:text-sm"
            aria-label={`${cart.length} item${cart.length === 1 ? '' : 's'} in cart`}
          >
            {cart.length}
          </Typography>
        </div>
      )}
    </div>
  );
};
