import { useCallback } from 'react';
import { toast } from 'sonner';

// Types
import { ToastOptions, ToastType } from '@/types';

// Styles
import { getToastStyles } from '@/utils';

/**
 * Hook to show custom toast notifications
 *
 * @returns The toast hook
 */
export const useToast = () => {
  const showToast = useCallback((type: ToastType, options: ToastOptions) => {
    const { title, description, action } = options;
    const styles = getToastStyles(type);

    const toastOptions = {
      description,
      style: {
        ...styles,
      },
      ...(action && {
        action: {
          label: action.label,
          onClick: action.onClick,
        },
      }),
    };

    switch (type) {
      case 'success':
        return toast.success(title, toastOptions);
      case 'error':
        return toast.error(title, toastOptions);
      case 'warning':
        return toast.warning(title, toastOptions);
      case 'info':
        return toast.info(title, toastOptions);
      default:
        return toast(title, toastOptions);
    }
  }, []);

  const error = useCallback(
    (options: ToastOptions) => showToast('error', options),
    [showToast],
  );

  const warning = useCallback(
    (options: ToastOptions) => showToast('warning', options),
    [showToast],
  );

  const info = useCallback(
    (options: ToastOptions) => showToast('info', options),
    [showToast],
  );

  const success = useCallback(
    (options: ToastOptions) => showToast('success', options),
    [showToast],
  );

  return {
    success,
    error,
    warning,
    info,
  };
};
