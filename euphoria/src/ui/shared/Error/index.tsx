'use client';

import Link from 'next/link';
import { CircleAlert } from 'lucide-react';

// Constants
import { ROUTES } from '@/constants';

// Components
import { Button } from '@/ui/components/common/Button';
import { Typography } from '@/ui/components/common/Typography';

interface ErrorProps {
  reset: () => void;
}

export const Error = ({ reset }: ErrorProps) => {
  const handleReset = () => {
    reset();
  };

  return (
    <section
      className="flex flex-1 justify-center items-center"
      aria-labelledby="error-heading"
    >
      <div className="max-w-[460px] flex flex-col items-center">
        <CircleAlert
          size={150}
          className="text-icon-error"
          aria-hidden="true"
        />
        <Typography
          as="h1"
          id="error-heading"
          fontFamily="coreSans"
          fontWeight="bold"
          fontSize="34px"
          color="error"
          className="pt-3.5 pb-2.5"
        >
          Oops...
          <Typography as="span">!</Typography>
        </Typography>
        <Typography
          fontFamily="coreSans"
          fontWeight="medium"
          className="text-center"
          role="status"
        >
          Something went wrong!
        </Typography>
        <div className="flex flex-col gap-2">
          <Button
            color="primary"
            variant="primary"
            fontSize="xs"
            className="font-bold mt-10.5"
            onClick={handleReset}
            aria-label="Try loading the page again"
          >
            Try again
          </Button>
          <Link href={ROUTES.HOME}>
            <Button variant="ghost">Back to HomePage</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
