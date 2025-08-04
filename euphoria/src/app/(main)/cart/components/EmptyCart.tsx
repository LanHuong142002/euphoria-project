import Link from 'next/link';

// Constants
import { IMAGE_DETAILS, ROUTES } from '@/constants';

// Components
import { Button } from '@/ui/components/common/Button';
import { Image } from '@/ui/components/common/Image';

export const EmptyCart = () => (
  <div className="flex flex-1 flex-col items-center justify-center gap-[50px] bg-background-tertiary">
    <div className="w-[347px] h-[227px] lg:w-[447px] lg:h-[327px] flex justify-center">
      <Image
        src={IMAGE_DETAILS.CART_EMPTY.src}
        alt={IMAGE_DETAILS.CART_EMPTY.alt}
        className="object-contain"
        classNameWrapper="w-full h-full"
      />
    </div>

    <div className="space-y-3 text-center">
      <h1 className="font-core-sans-c text-xl md:text-[34px] font-bold text-text-quaternary">
        Your cart is empty and sad <span className="font-causten">:(</span>
      </h1>
      <p className="font-core-sans-c text-text-primary text-md">
        Add something to make it happy<span className="font-causten">!</span>
      </p>
    </div>

    <Link href={ROUTES.HOME}>
      <Button
        variant="primary"
        color="primary"
        className="px-8 py-3 text-lg font-medium"
      >
        Continue Shopping
      </Button>
    </Link>
  </div>
);
