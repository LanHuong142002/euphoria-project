import Link from 'next/link';

// Components
import { Image } from '@/ui/components/common/Image';
import { Button } from '@/ui/components/common/Button';
import { Typography } from '@/ui/components/common/Typography';

// Constants
import {
  IMAGE_DETAILS,
  IMAGES,
  ROUTES,
  SCREEN_HEIGHT_WITH_HEADER_AND_FOOTER_DESKTOP,
  SCREEN_HEIGHT_WITH_HEADER_AND_FOOTER_MOBILE,
} from '@/constants';

// Utils
import { cn } from '@/utils';

export const NotFound = () => (
  <div
    className={cn(
      'flex justify-center items-center',
      SCREEN_HEIGHT_WITH_HEADER_AND_FOOTER_MOBILE,
      SCREEN_HEIGHT_WITH_HEADER_AND_FOOTER_DESKTOP,
    )}
  >
    <div className="max-w-[460px] flex flex-col items-center">
      <div className="w-[400px] h-[274px]">
        <Image
          src={IMAGES.NOT_FOUND}
          alt={IMAGE_DETAILS.NOT_FOUND.alt}
          className="object-cover"
          classNameWrapper="w-full h-full"
        />
      </div>
      <Typography
        as="h1"
        fontFamily="coreSans"
        fontWeight="bold"
        fontSize="34px"
        color="quaternary"
        className="pt-3.5 pb-2.5"
      >
        Oops
        <Typography as="span" fontFamily="causten">
          !
        </Typography>{' '}
        Page not found
      </Typography>
      <Typography fontWeight="medium" className="text-center">
        The page you are looking for might have been removed or temporarily
        unavailable.
      </Typography>
      <Link href={ROUTES.HOME} className="pt-10.5">
        <Button
          color="primary"
          variant="primary"
          fontSize="xs"
          className="font-bold"
        >
          Back to HomePage
        </Button>
      </Link>
    </div>
  </div>
);
