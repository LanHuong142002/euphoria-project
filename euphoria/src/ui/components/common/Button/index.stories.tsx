import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/nextjs';

// Components
import { Button } from '.';

// Icons
import { TrashIcon } from '@/ui/icons/TrashIcon';

const meta = {
  title: 'Components/Common/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'tertiary', 'outline', 'ghost'],
    },
    color: {
      control: 'inline-radio',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'light',
        'dark',
        'ghost',
        'icon',
      ],
    },
    size: {
      control: 'inline-radio',
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        'full',
        'icon',
        'none',
      ],
    },
    fontSize: {
      control: 'inline-radio',
      options: [
        'xs',
        'sm',
        'base',
        'md',
        'lg',
        'lg-nor',
        'xl',
        '2xl',
        '3xl',
        '4xl',
      ],
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    color: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    color: 'ghost',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary Button',
    variant: 'tertiary',
    color: 'tertiary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
    color: 'ghost',
  },
};

export const Icon: Story = {
  args: {
    children: <TrashIcon width="20" height="20" />,
    variant: 'primary',
    color: 'icon',
    size: 'icon',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    color: 'primary',
    size: 'lg',
    fontSize: 'lg',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'outline',
    color: 'ghost',
    size: 'xs',
    fontSize: 'xs',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    color: 'primary',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    variant: 'primary',
    color: 'primary',
    isLoading: true,
  },
};
