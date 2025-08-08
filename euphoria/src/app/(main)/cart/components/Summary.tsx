'use client';

import { useRouter } from 'next/navigation';

// Constants
import { ROUTES } from '@/constants';

// Components
import { Button } from '@/ui/components/common/Button';
import { Separator } from '@/ui/components/common/Separator';
import { Typography } from '@/ui/components/common/Typography';

// Hooks
import { useToast } from '@/hooks';

const SHIPPING_COST = 5.0;

interface SummaryProps {
  totalPrice: number;
}
export const Summary = ({ totalPrice }: SummaryProps) => {
  const router = useRouter();
  const { success } = useToast();
  const grandTotal = totalPrice + SHIPPING_COST;

  const LIST_ITEMS = [
    {
      label: 'Sub Total',
      value: totalPrice.toFixed(2),
    },
    {
      label: 'Shipping',
      value: SHIPPING_COST.toFixed(2),
    },
  ];

  const handleProceedToCheckout = async () => {
    success({
      title: 'Successfully proceed to checkout',
      description:
        'This feature is currently in development. You will be redirected to the checkout success page shortly.',
    });
    // Pass a parameter to indicate cart should be cleared
    router.push(`${ROUTES.ORDER_SUCCESS}?clearCart=true`);
  };

  return (
    <div className="bg-background-tertiary px-4 lg:px-0">
      <div className="container mx-auto pt-10 pb-12.5">
        <div className="space-y-[15px]">
          {LIST_ITEMS.map(({ label, value }) => (
            <div key={label} className="flex justify-between">
              <Typography
                as="span"
                fontSize="lg"
                className="lg:text-[22px]"
                color="secondary"
              >
                {label}
              </Typography>
              <Typography
                as="span"
                fontWeight="medium"
                fontSize="lg"
                className="lg:text-[22px]"
                color="secondary"
              >
                ${value}
              </Typography>
            </div>
          ))}

          <div className="flex justify-between pt-[25px]">
            <Typography
              as="span"
              fontSize="lg"
              fontWeight="bold"
              className="lg:text-[22px]"
              color="secondary"
            >
              Grand Total
            </Typography>
            <Typography
              as="span"
              fontSize="lg"
              fontWeight="bold"
              className="lg:text-[22px]"
              color="secondary"
            >
              ${grandTotal.toFixed(2)}
            </Typography>
          </div>
        </div>

        <Separator className="my-[50px]" />

        <div className="flex justify-end">
          <Button
            color="primary"
            onClick={handleProceedToCheckout}
            variant="primary"
            className="self-end w-full md:w-auto"
          >
            Proceed To Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};
