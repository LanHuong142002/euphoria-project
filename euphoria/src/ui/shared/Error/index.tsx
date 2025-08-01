'use client';

import Link from 'next/link';
import { CircleAlert } from 'lucide-react';

// Constants
import { ROUTES } from '@/constants';

// Components
import { Button } from '@/ui/components/common/Button';

interface ErrorProps {
  reset: () => void;
}

export const Error = ({ reset }: ErrorProps) => {
  const handleReset = () => {
    reset();
  };

  return (
    <div className="flex flex-1 justify-center items-center">
      <div className="max-w-[460px] flex flex-col items-center">
        <CircleAlert size={150} className="text-icon-error" />
        <h1 className="font-core-sans-c text-[34px] text-text-error font-bold pt-3.5 pb-2.5">
          Oops...<span className="font-causten">!</span>
        </h1>
        <p className="font-causten text-center text-md text-text-primary font-medium">
          Something went wrong!
        </p>
        <div className="flex flex-col gap-2">
          <Button
            color="primary"
            variant="primary"
            fontSize="xs"
            className="font-bold mt-10.5"
            onClick={handleReset}
          >
            Try again
          </Button>
          <Link href={ROUTES.HOME}>
            <Button variant="ghost">Back to HomePage</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
