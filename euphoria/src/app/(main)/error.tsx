'use client';

import { useEffect } from 'react';

// Components
import { Error as ErrorComponent } from '@/ui/shared/Error';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error in main group');
  }, [error]);

  return <ErrorComponent reset={reset} />;
}
