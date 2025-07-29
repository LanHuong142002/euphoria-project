'use client';

import { ComponentProps } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';

const labelVariants = cva(
  'flex items-center gap-2 leading-none select-none text-label-primary group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
  {
    variants: {
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
      },
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
    },
    defaultVariants: {
      size: 'sm',
      weight: 'medium',
    },
  },
);

export interface LabelProps
  extends ComponentProps<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {}

export const Label = ({ className, size, weight, ...props }: LabelProps) => (
  <LabelPrimitive.Root
    data-slot="label"
    className={cn(labelVariants({ size, weight, className }))}
    {...props}
  />
);
