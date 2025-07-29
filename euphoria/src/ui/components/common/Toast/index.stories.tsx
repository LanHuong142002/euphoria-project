import type { Meta, StoryObj } from '@storybook/nextjs';
import { Toaster } from './index';
import { useToast } from '@/hooks/useToast';
import { Button } from '../Button';

const meta: Meta<typeof Toaster> = {
  title: 'Components/Common/Toast',
  component: Toaster,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A toast notification component that integrates with Sonner and supports theme switching.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      description: 'Position of the toast notifications',
    },
    duration: {
      control: 'number',
      description: 'Duration in milliseconds before the toast auto-dismisses',
    },
    theme: {
      control: 'select',
      options: ['light', 'dark', 'system'],
      description: 'Theme for the toast notifications',
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <Toaster position="bottom-right" duration={2000} />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Toast component with short duration
 */
export const SuccessToast: Story = {
  render: () => {
    const { success } = useToast();

    return (
      <Button
        variant="primary"
        color="primary"
        onClick={() =>
          success({
            title: 'Success!',
            description: 'Your action was completed successfully.',
          })
        }
      >
        Show Success Toast
      </Button>
    );
  },
};

export const ErrorToast: Story = {
  render: () => {
    const { error } = useToast();

    return (
      <Button
        variant="primary"
        color="primary"
        onClick={() =>
          error({
            title: 'Error!',
            description: 'Something went wrong. Please try again.',
          })
        }
      >
        Show Error Toast
      </Button>
    );
  },
};

export const WarningToast: Story = {
  render: () => {
    const { warning } = useToast();

    return (
      <Button
        variant="primary"
        color="primary"
        onClick={() =>
          warning({
            title: 'Warning!',
            description: 'Please check your input before proceeding.',
          })
        }
      >
        Show Warning Toast
      </Button>
    );
  },
};

export const InfoToast: Story = {
  render: () => {
    const { info } = useToast();

    return (
      <Button
        variant="primary"
        color="primary"
        onClick={() =>
          info({
            title: 'Info!',
            description: 'This is an informational message.',
          })
        }
      >
        Show Info Toast
      </Button>
    );
  },
};
