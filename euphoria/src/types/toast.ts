export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastOptions {
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}
