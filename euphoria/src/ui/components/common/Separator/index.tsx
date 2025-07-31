'use client';

import { ComponentProps } from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

// Utils
import { cn } from '@/utils';

interface SeparatorProps
  extends ComponentProps<typeof SeparatorPrimitive.Root> {
  text?: string;
}

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  text,
  ...props
}: SeparatorProps) {
  if (text) {
    return (
      <div className="flex items-center">
        <SeparatorPrimitive.Root
          data-slot="separator"
          decorative={decorative}
          orientation={orientation}
          className={cn(
            'flex-1 bg-background-fade opacity-25 shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
            className,
          )}
          {...props}
        />
        <span className="px-[25px] text-background-fade text-sm font-medium whitespace-nowrap">
          {text}
        </span>
        <SeparatorPrimitive.Root
          data-slot="separator"
          decorative={decorative}
          orientation={orientation}
          className={cn(
            'flex-1 bg-background-fade opacity-25 shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
            className,
          )}
          {...props}
        />
      </div>
    );
  }

  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'bg-background-fade bg-opacity-25 shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
        className,
      )}
      {...props}
    />
  );
}

export { Separator };
