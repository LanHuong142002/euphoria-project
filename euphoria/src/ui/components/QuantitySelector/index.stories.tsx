import type { Meta, StoryObj } from '@storybook/nextjs';

// Components
import { QuantitySelector } from '.';

const meta: Meta<typeof QuantitySelector> = {
  title: 'Components/QuantitySelector',
  component: QuantitySelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: { type: 'number' },
      description: 'Minimum allowed quantity',
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum allowed quantity',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the component is disabled',
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when quantity changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    min: 1,
    max: 10,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
