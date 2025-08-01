// Constants
import {
  IMAGE_DETAILS,
  IMAGES,
  ROUTES,
  SCREEN_HEIGHT_WITH_HEADER_AND_FOOTER_DESKTOP,
  SCREEN_HEIGHT_WITH_HEADER_AND_FOOTER_MOBILE,
} from '@/constants';
import { Button } from '@/ui/components/common/Button';

// Components
import { Image } from '@/ui/components/common/Image';
import { Footer } from '@/ui/shared/Footer';

// Utils
import { cn } from '@/utils';
import Link from 'next/link';

const NotFound = () => (
  <div>
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
        <h1 className="font-core-sans-c text-[34px] text-text-quaternary font-bold pt-3.5 pb-2.5">
          Oops<span className="font-causten">!</span> Page not found
        </h1>
        <p className="font-causten text-center text-md text-text-primary font-medium">
          The page you are looking for might have been removed or temporarily
          unavailable.
        </p>
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
    <Footer />
  </div>
);

export default NotFound;
