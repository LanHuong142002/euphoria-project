import type { Meta, StoryObj } from '@storybook/nextjs';
import { Star } from 'lucide-react';

// Components
import { Badge } from '.';

const meta: Meta<typeof Badge> = {
  title: 'Components/Common/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline', 'icon'],
    },
    asChild: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Badge',
    variant: 'default',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Badge',
    variant: 'outline',
  },
};

export const Icon: Story = {
  args: {
    children: <Star size={16} />,
    variant: 'icon',
  },
};
