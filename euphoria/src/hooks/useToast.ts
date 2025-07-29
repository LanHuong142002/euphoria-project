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
  const showToast = (type: ToastType, options: ToastOptions) => {
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
  };

  return {
    success: (options: ToastOptions) => showToast('success', options),
    error: (options: ToastOptions) => showToast('error', options),
    warning: (options: ToastOptions) => showToast('warning', options),
    info: (options: ToastOptions) => showToast('info', options),
  };
};
