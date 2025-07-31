import { ComponentProps } from 'react';

// Utils
import { cn } from '@/utils';

function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        'bg-background-secondary animate-pulse rounded-md',
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
