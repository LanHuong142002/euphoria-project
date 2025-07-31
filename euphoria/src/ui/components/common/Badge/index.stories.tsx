import type { Meta, StoryObj } from '@storybook/nextjs';

// Components
import { Badge } from '.';

// Icons
import { TrashIcon } from '@/ui/icons/TrashIcon';

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
    children: <TrashIcon width="16" height="16" />,
    variant: 'icon',
  },
};
