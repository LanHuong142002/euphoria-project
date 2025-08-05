import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/nextjs';

// Components
import { ModalConfirm } from '.';
import { Button } from '../common/Button';

const meta: Meta<typeof ModalConfirm> = {
  title: 'Components/ModalConfirm',
  component: ModalConfirm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <Button variant="outline">Alert Dialog</Button>,
    title: 'Are you absolutely sure?',
    description:
      'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    onConfirm: fn(),
  },
};
