'use client';

import { Minus, Plus } from 'lucide-react';
import { ComponentProps, useState } from 'react';

// Components
import { Button } from '../common/Button';

// Utils
import { cn } from '@/utils';

export interface QuantitySelectorProps
  extends Omit<ComponentProps<'div'>, 'onChange'> {
  min?: number;
  max?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
}

export const QuantitySelector = ({
  min = 1,
  max = 99,
  onChange,
  disabled = false,
  className,
  ...props
}: QuantitySelectorProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (disabled || quantity <= min) return;

    const newValue = quantity - 1;
    setQuantity(newValue);
    onChange?.(newValue);
  };

  const handleIncrease = () => {
    if (disabled || quantity >= max) return;

    const newValue = quantity + 1;
    setQuantity(newValue);
    onChange?.(newValue);
  };

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center gap rounded-xl bg-quantity-selector-primary py-2.5 px-4.5',
        disabled && 'opacity-50 cursor-default',
        className,
      )}
      {...props}
    >
      <Button
        onClick={handleDecrease}
        variant="ghost"
        color="ghost"
        disabled={disabled || quantity <= min}
        className={cn('p-1', quantity <= min && 'opacity-30')}
        aria-label="Decrease quantity"
      >
        <Minus size={12} className="text-quantity-selector-secondary" />
      </Button>

      <span className="min-w-[2rem] text-center font-medium text-quantity-selector-secondary text-xs">
        {quantity}
      </span>

      <Button
        onClick={handleIncrease}
        variant="ghost"
        color="ghost"
        disabled={disabled || quantity >= max}
        className={cn('p-1', quantity >= max && 'opacity-30')}
        aria-label="Increase quantity"
      >
        <Plus size={12} className="text-quantity-selector-secondary" />
      </Button>
    </div>
  );
};
