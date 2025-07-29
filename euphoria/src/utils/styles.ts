import { clsx, type ClassValue } from 'clsx';
import { CSSProperties } from 'react';
import { twMerge } from 'tailwind-merge';

// Types
import { ToastType } from '@/types';

/**
 * Merge class names
 * @param inputs - The class names to merge
 *
 * @returns The merged class names
 */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

/**
 * Get the styles for the toast
 * @param type - The type of toast
 *
 * @returns The styles for the toast
 */
export const getToastStyles = (type: ToastType) =>
  ({
    '--normal-bg': `var(--toast-${type}-bg)`,
    '--normal-text': `var(--toast-${type}-text)`,
    '--normal-border': `var(--toast-${type}-border)`,
    '--normal-description': `var(--toast-description)`,
    '--toast-icon-gap': '10px',
    gap: '10px',
  }) as CSSProperties;
