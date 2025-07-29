'use client';

import { ComponentProps, forwardRef, ReactNode, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Eye, EyeOff } from 'lucide-react';

// Components
import { Label } from '../Label';

// Utils
import { cn } from '@/utils';

const inputVariants = cva(
  'flex w-full rounded-md border border-input bg-background text-input-tertiary font-normal ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none disabled:cursor-default disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-input-tertiary bg-input-primary',
        error: 'border-input-error bg-input-primary',
        tertiary: 'border-none bg-input-secondary',
      },
      size: {
        default: 'py-4 px-5 text-sm',
        xxs: 'pb-5 text-xs',
        xs: 'py-3 px-5 text-xs',
        sm: 'py-4 px-5 text-base',
        md: 'py-4 px-5 text-sm',
        lg: 'py-4 px-6 text-base',
      },
      hasIcon: {
        true: 'pl-10',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      hasIcon: false,
    },
  },
);

export interface InputProps
  extends Omit<ComponentProps<'input'>, 'size'>,
    VariantProps<typeof inputVariants> {
  showPasswordToggle?: boolean;
  label?: string;
  error?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  id?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      size,
      hasIcon,
      error,
      showPasswordToggle,
      leftElement,
      rightElement,
      label,
      id,
      type,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = showPasswordToggle
      ? showPassword
        ? 'text'
        : 'password'
      : type || 'text';

    const togglePassword = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="w-full">
        {(label || showPasswordToggle) && (
          <div className="flex items-center justify-between mb-2">
            {label && (
              <Label htmlFor={id} size="lg" weight="normal">
                {label}
              </Label>
            )}
            {showPasswordToggle && (
              <div
                onClick={togglePassword}
                className="flex items-center justify-end gap-2 text-input-placeholder hover:opacity-70 cursor-pointer"
              >
                {showPassword ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
                {showPassword ? 'Hide' : 'Show'}
              </div>
            )}
          </div>
        )}
        <div className="relative flex items-center">
          {leftElement && <div className="absolute left-3">{leftElement}</div>}

          <input
            id={id}
            type={inputType}
            data-slot="input"
            className={cn(
              inputVariants({
                variant: error ? 'error' : variant,
                size,
                hasIcon: !!leftElement || hasIcon,
              }),
              className,
            )}
            ref={ref}
            {...props}
          />

          {rightElement && (
            <div className="absolute right-3">{rightElement}</div>
          )}
        </div>
      </div>
    );
  },
);
