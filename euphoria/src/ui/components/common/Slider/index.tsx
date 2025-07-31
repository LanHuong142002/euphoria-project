'use client';

import { ComponentProps, useState, useEffect } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/utils';

interface SliderProps extends ComponentProps<typeof SliderPrimitive.Root> {
  onRangeChange?: (values: number[]) => void;
}

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  onRangeChange,
  ...props
}: SliderProps) {
  // Internal state for uncontrolled mode
  const [internalValue, setInternalValue] = useState<number[]>(() => {
    if (Array.isArray(value)) return value;
    if (Array.isArray(defaultValue)) return defaultValue;
    return [min, max];
  });

  // Update internal state when controlled value changes
  useEffect(() => {
    if (Array.isArray(value)) {
      setInternalValue(value);
    }
  }, [value]);

  // Determine if component is controlled
  const isControlled = Array.isArray(value);
  const currentValue = isControlled ? value : internalValue;

  const handleValueChange = (newValues: number[]) => {
    if (!isControlled) {
      setInternalValue(newValues);
    }
    onRangeChange?.(newValues);
  };

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={currentValue}
      min={min}
      max={max}
      onValueChange={handleValueChange}
      className={cn(
        'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          'bg-slider-primary relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5',
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            'bg-slider-range absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full',
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: currentValue.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="bg-slider-range block size-4 shrink-0 rounded-full transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };
export type { SliderProps };
