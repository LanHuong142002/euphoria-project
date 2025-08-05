import Link from 'next/link';
import { Metadata } from 'next';
import { CircleCheckBig } from 'lucide-react';

// Constants
import { IMAGE_DETAILS, ROUTES } from '@/constants';

// Components
import { ClearCart } from './components/ClearCart';
import { Image } from '@/ui/components/common/Image';
import { Button } from '@/ui/components/common/Button';

// Utils
import { cn } from '@/utils';

export const metadata: Metadata = {
  title: 'Order Success',
};

interface Props {
  searchParams: Promise<{ clearCart: string }>;
}

const OrderSuccessPage = async ({ searchParams }: Props) => {
  const { clearCart } = await searchParams;

  return (
    <div className="flex flex-1 items-center justify-center bg-background-primary">
      <div
        className={cn(
          'relative overflow-hidden flex-shrink-0',
          'w-[500px] h-[364px] md:w-[715px] md:h-[520px]',
          'hidden sm:block',
        )}
      >
        <Image
          src={IMAGE_DETAILS.ORDER_SUCCESS.src}
          alt={IMAGE_DETAILS.ORDER_SUCCESS.alt}
          className="object-cover"
          classNameWrapper="w-full h-full"
          priority
        />
        <div
          className={cn(
            'flex flex-col items-center justify-center max-w-[195px]',
            'gap-[10px] md:gap-[30px]',
            'absolute top-1/2 right-[40px] md:right-[85px]',
          )}
        >
          <h1 className="text-2xl md:text-3xl text-center font-core-sans-c text-text-secondary font-bold">
            Your Order is Confirmed
          </h1>
          <Link href={ROUTES.HOME}>
            <Button
              variant="primary"
              color="primary"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium"
            >
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center max-w-[195px] gap-[30px] sm:hidden">
        <CircleCheckBig className="size-30 text-icon-success" />
        <h1 className="text-2xl md:text-3xl text-center font-core-sans-c text-text-secondary font-bold">
          Your Order is Confirmed
        </h1>
        <Link href={ROUTES.HOME}>
          <Button
            variant="primary"
            color="primary"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium"
          >
            Continue Shopping
          </Button>
        </Link>
      </div>
      <ClearCart isClearCart={clearCart === 'true'} />
    </div>
  );
};

export default OrderSuccessPage;
