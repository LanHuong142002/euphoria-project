import Link from 'next/link';

// Constants
import { IMAGE_DETAILS, ROUTES } from '@/constants';

// Components
import { Button } from '@/ui/components/common/Button';
import { Image } from '@/ui/components/common/Image';
import { Typography } from '@/ui/components/common/Typography';

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
      <Typography
        as="h1"
        fontFamily="coreSans"
        fontWeight="bold"
        fontSize="xl"
        color="quaternary"
        className="md:text-[34px]"
      >
        Your cart is empty and sad
        <Typography as="span">:(</Typography>
      </Typography>

      <Typography fontFamily="coreSans">
        Add something to make it happy
        <Typography as="span">!</Typography>
      </Typography>
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
