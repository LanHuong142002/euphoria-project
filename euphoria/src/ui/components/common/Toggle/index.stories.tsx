import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/nextjs';

// Components
import { Toggle } from '.';

const meta = {
  title: 'Components/Common/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    variant: {
      control: 'inline-radio',
      options: ['default', 'outline'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'default', 'lg', 'xl'],
    },
  },
  args: {
    onPressedChange: fn(),
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Toggle',
    variant: 'default',
    size: 'default',
  },
};

export const Small: Story = {
  args: {
    children: 'S',
    variant: 'default',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'L',
    variant: 'default',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    children: 'XL',
    variant: 'default',
    size: 'xl',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
    size: 'default',
  },
};

export const Pressed: Story = {
  args: {
    children: 'Pressed',
    variant: 'default',
    size: 'default',
    pressed: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    variant: 'default',
    size: 'default',
    disabled: true,
  },
};

export const SizeComparison: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle size="lg" pressed>
        L
      </Toggle>
      <Toggle size="xl">XL</Toggle>
    </div>
  ),
};
