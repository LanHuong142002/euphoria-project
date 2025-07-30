import { forwardRef, SVGProps } from 'react';

// Utils
import { cn } from '@/utils';

export interface SvgFactoryProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

export const SvgFactory = forwardRef<SVGSVGElement, SvgFactoryProps>(
  ({ width, height, size, children, className, ...props }, ref) => {
    const sizeClass = size
      ? `w-[${size}px] h-[${size}px]`
      : `w-[${width}px] h-[${height}px]`;

    return (
      <svg
        ref={ref}
        className={cn(sizeClass, className)}
        width={width}
        height={height}
        {...props}
      >
        {children}
      </svg>
    );
  },
);
