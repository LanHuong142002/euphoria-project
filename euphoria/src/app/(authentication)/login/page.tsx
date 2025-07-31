import { Suspense } from 'react';

// Constants
import { IMAGES } from '@/constants';

// Components
import { Form } from './components/Form';
import { Image } from '@/ui/components/common/Image';
import { FormSkeleton } from './components/FormSkeleton';
import { ExternalLogin } from './components/ExternalLogin';
import { Separator } from '@/ui/components/common/Separator';

export default function LoginPage() {
  return (
    <div className="w-full flex-1 flex">
      <div className="w-1/2 flex-1 flex">
        <Image
          src={IMAGES.ONBOARDING}
          alt="logo"
          className="object-cover"
          classNameWrapper="w-full h-full"
        />
      </div>
      <div className="w-1/2 pt-15">
        <div className="w-[568px] mx-auto">
          <h1 className="font-core-sans-c text-[34px] font-bold">
            Sign In Page
          </h1>
          <div className="pt-[56px] space-y-[50px]">
            <ExternalLogin />
            <Separator text="Or" />
            <Suspense fallback={<FormSkeleton />}>
              <Form />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
