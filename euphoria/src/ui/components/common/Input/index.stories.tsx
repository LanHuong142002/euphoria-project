import type { Meta, StoryObj } from '@storybook/nextjs';
import { fn } from '@storybook/test';
import { Search } from 'lucide-react';

// Components
import { Input } from '.';

const meta = {
  title: 'Components/Common/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    showPasswordToggle: { control: 'boolean' },
    variant: {
      control: 'inline-radio',
      options: [
        'default',
        'error',
        'tertiary',
        'secondary',
        'primary',
        'quaternary',
      ],
    },
    size: {
      control: 'inline-radio',
      options: ['default', 'xxs', 'xs', 'sm', 'md', 'lg'],
    },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    placeholder: 'designer@gmail.com',
    variant: 'default',
    size: 'default',
    type: 'email',
    label: 'Email Address',
  },
};

export const DefaultWithError: Story = {
  args: {
    placeholder: 'designer@gmail.com',
    variant: 'default',
    size: 'default',
    type: 'email',
    label: 'Email Address',
    error: 'Error Message',
  },
};

export const PasswordInput: Story = {
  args: {
    placeholder: 'Enter password',
    variant: 'default',
    size: 'default',
    type: 'password',
    label: 'Password',
    showPasswordToggle: true,
  },
};

export const SearchInput: Story = {
  args: {
    placeholder: 'Search',
    variant: 'tertiary',
    size: 'lg',
    leftElement: <Search className="h-4 w-4" />,
  },
};

export const DisabledInput: Story = {
  args: {
    placeholder: 'Disabled input',
    variant: 'default',
    size: 'default',
    disabled: true,
  },
};
