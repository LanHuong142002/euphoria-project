import { Loader2 } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { ComponentProps, MouseEvent } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Utils
import { cn } from '@/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all cursor-pointer disabled:pointer-default disabled:opacity-50 disabled:cursor-default',
  {
    variants: {
      variant: {
        primary: 'shadow-xs hover:opacity-70',
        secondary:
          'shadow-xs border hover:bg-button-primary hover:text-button-tertiary hover:border-button-tertiary',
        tertiary:
          'bg-transparent border border-button-secondary hover:opacity-70',
        outline: 'bg-transparent shadow-xs border hover:opacity-70',
        ghost: 'underline-offset-4 hover:underline',
      },

      color: {
        primary: 'bg-button-primary text-button-tertiary',
        secondary:
          'bg-button-tertiary text-button-primary border-button-secondary',
        tertiary: 'text-button-primary',
        light: 'text-button-tertiary border-button-tertiary',
        dark: 'text-button-secondary border-button-secondary',
        ghost: 'text-button-secondary',
        icon: 'bg-background-tertiary',
      },

      font: {
        causten: 'font-causten',
        coreSans: 'font-core-sans-c',
      },

      size: {
        xs: 'py-2.5 px-6',
        sm: 'py-3 px-8',
        md: 'py-3 px-10',
        lg: 'py-3 px-12',
        xl: 'py-4 px-5',
        '2xl': 'py-4 px-14',
        '3xl': 'py-4 px-18',
        full: 'py-4 px-4 w-full',
        icon: 'p-3',
        none: 'p-0 m-0',
      },

      fontSize: {
        xs: 'text-xs font-medium',
        sm: 'text-sm font-normal',
        base: 'text-base font-normal',
        md: 'text-base font-bold',
        lg: 'text-lg font-medium',
        'lg-nor': 'text-lg font-normal',
        xl: 'text-lg font-bold',
        '2xl': 'text-xl font-bold',
        '3xl': 'text-xl font-medium',
        '4xl': 'text-2xl font-bold',
      },

      isLoading: {
        true: 'opacity-50 cursor-default',
      },
    },

    defaultVariants: {
      variant: 'primary',
      size: 'md',
      font: 'causten',
      color: 'secondary',
    },
    compoundVariants: [
      {
        variant: 'ghost',
        size: 'none',
        className: 'border-none',
      },
      {
        variant: 'tertiary',
        size: 'full',
        fontSize: '3xl',
        className: 'h-[58]',
      },
    ],
  },
);

export const Button = ({
  isLoading,
  className,
  variant,
  size,
  fontSize,
  color,
  asChild = false,
  onClick,
  ...props
}: ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) => {
  const Comp = asChild ? Slot : 'button';

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (isLoading) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({
          variant,
          size,
          fontSize,
          color,
          className,
          isLoading,
        }),
      )}
      onClick={handleClick}
      {...props}
    >
      {isLoading && <Loader2 className="animate-spin" size={20} />}
      {props.children}
    </Comp>
  );
};
