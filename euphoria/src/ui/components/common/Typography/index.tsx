import React from 'react';

// Utils
import { cn } from '@/utils';

// Supported color classes from globals.css
export type TypographyColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'quinary'
  | 'error';

export type TypographyFontFamily = 'causten' | 'coreSans';

export type TypographyFontWeight =
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold';

export type TypographyFontSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '22px'
  | '28px'
  | '34px'
  | 'base';

export type TypographyTag =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'div';

const colorClassMap: Record<TypographyColor, string> = {
  primary: 'text-text-primary',
  secondary: 'text-text-secondary',
  tertiary: 'text-text-tertiary',
  quaternary: 'text-text-quaternary',
  quinary: 'text-text-quinary',
  error: 'text-text-error',
};

const fontFamilyClassMap: Record<TypographyFontFamily, string> = {
  causten: 'font-causten',
  coreSans: 'font-core-sans-c',
};

const fontWeightClassMap: Record<TypographyFontWeight, string> = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
};

const fontSizeClassMap: Record<TypographyFontSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  base: 'text-base',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '22px': 'text-[22px]',
  '28px': 'text-[28px]',
  '34px': 'text-[34px]',
};

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: TypographyTag;
  color?: TypographyColor;
  fontFamily?: TypographyFontFamily;
  fontWeight?: TypographyFontWeight;
  fontSize?: TypographyFontSize;
  className?: string;
  children: React.ReactNode;
}

export const Typography = ({
  as = 'p',
  color = 'primary',
  fontFamily = 'causten',
  fontWeight = 'normal',
  fontSize = 'md',
  className,
  children,
  ...props
}: TypographyProps) => {
  const Component = as;
  return (
    <Component
      className={cn(
        colorClassMap[color],
        fontFamilyClassMap[fontFamily],
        fontWeightClassMap[fontWeight],
        fontSizeClassMap[fontSize],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
