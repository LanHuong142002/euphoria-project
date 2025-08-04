'use client';

import { ComponentProps } from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';

// Utils
import { cn } from '@/utils';

const toggleVariants = cva(
  'inline-flex items-center px-3 justify-center gap-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-toggle-fill hover:opacity-70 data-[state=on]:bg-toggle-fill data-[state=on]:text-toggle-fill-hover data-[state=on]:border-toggle-fill',
  {
    variants: {
      variant: {
        default: 'bg-transparent border-2 border-toggle-primary',
        circle: 'bg-transparent border-2 rounded-full',
        outline: 'border-2 border-toggle-primary bg-transparent',
      },
      size: {
        sm: 'h-9.5 w-9.5 text-sm',
        default: 'h-10 min-w-10 text-sm',
        circle: 'h-5.5 min-w-5.5 p-0',
        lg: 'h-12 min-w-12 text-base',
        xl: 'h-14 min-w-14 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export const Toggle = ({
  className,
  variant,
  size,
  ...props
}: ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) => (
  <TogglePrimitive.Root
    data-slot="toggle"
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
);
