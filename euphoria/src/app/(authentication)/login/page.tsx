import { Suspense } from 'react';
import { Metadata } from 'next';

// Constants
import { IMAGE_DETAILS } from '@/constants';

// Components
import { Form } from './components/Form';
import { Image } from '@/ui/components/common/Image';
import { FormSkeleton } from './components/FormSkeleton';
import { ExternalLogin } from './components/ExternalLogin';
import { Separator } from '@/ui/components/common/Separator';
import { Typography } from '@/ui/components/common/Typography';

export const metadata: Metadata = {
  title: 'Login',
};

const LoginPage = () => (
  <div className="w-full flex-1 flex gap-[10px] xl:gap-[77px]">
    <aside className="xl:w-1/2 flex-1 flex hidden xl:block">
      <Image
        src={IMAGE_DETAILS.ONBOARDING.src}
        alt={IMAGE_DETAILS.ONBOARDING.alt}
        className="object-cover"
        classNameWrapper="w-full h-full"
      />
    </aside>
    <section
      className="container mx-auto xl:w-1/2 pt-15 pb-15 lg:pb-0"
      aria-labelledby="login-title"
    >
      <div className="w-[300px] md:w-[400px] lg:w-[568px] mx-auto">
        <Typography
          id="login-title"
          as="h1"
          fontFamily="coreSans"
          fontWeight="bold"
          fontSize="34px"
        >
          Sign In Page
        </Typography>
        <div className="pt-[56px] space-y-[50px]">
          <ExternalLogin />
          <Separator text="Or" />
          <Suspense fallback={<FormSkeleton />}>
            <Form />
          </Suspense>
        </div>
      </div>
    </section>
  </div>
);

export default LoginPage;
