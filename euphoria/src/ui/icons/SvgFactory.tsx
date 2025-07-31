import { forwardRef, SVGProps } from 'react';

// Utils
import { cn } from '@/utils';

export interface SvgFactoryProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

export const SvgFactory = forwardRef<SVGSVGElement, SvgFactoryProps>(
  ({ width, height, size, children, className, ...props }, ref) => (
    <svg
      ref={ref}
      className={cn(className)}
      width={width || size}
      height={height || size}
      {...props}
    >
      {children}
    </svg>
  ),
);
