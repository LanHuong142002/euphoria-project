import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';

import { Slider } from '.';

const meta: Meta<typeof Slider> = {
  title: 'Components/Common/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A range slider component built with Radix UI primitives. Supports both controlled and uncontrolled modes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: { type: 'number' },
      description: 'Minimum value of the slider',
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum value of the slider',
    },
    defaultValue: {
      control: { type: 'object' },
      description: 'Default values for the slider (uncontrolled mode)',
    },
    value: {
      control: { type: 'object' },
      description: 'Current values for the slider (controlled mode)',
    },
    step: {
      control: { type: 'number' },
      description: 'Step increment for the slider',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the slider is disabled',
    },
    onRangeChange: {
      action: 'range changed',
      description: 'Callback fired when the range changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [range, setRange] = useState([70, 600]);

    return (
      <div className="flex flex-col gap-4 w-[200px]">
        <Slider min={0} max={1000} value={range} onRangeChange={setRange} />
      </div>
    );
  },
};
