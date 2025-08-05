import { ComponentProps } from 'react';

// Utils
import { cn } from '@/utils';

function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('bg-skeleton-primary animate-pulse rounded-md', className)}
      {...props}
    />
  );
}

export { Skeleton };
