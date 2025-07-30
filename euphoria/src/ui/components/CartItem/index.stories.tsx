import type { Meta, StoryObj } from '@storybook/nextjs';

// Components
import { CartItem } from '.';

// Constants
import { IMAGES } from '@/constants';

const meta: Meta<typeof CartItem> = {
  title: 'Components/CartItem',
  component: CartItem,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    quantity: {
      control: { type: 'number' },
      description: 'Current quantity of the item',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the component is disabled',
    },
    onQuantityChange: {
      action: 'quantity changed',
      description: 'Callback fired when quantity changes',
    },
    onRemove: {
      action: 'removed',
      description: 'Callback fired when remove button is clicked',
    },
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center align-center h-full">
        <div className="w-4/5">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProduct = {
  id: '1',
  name: 'Lavender Hoodie',
  color: 'Lavender',
  size: 'XXL',
  price: 119.0,
  images: [IMAGES.MOCK_PRODUCT_IMAGE],
};

export const Default: Story = {
  args: {
    product: defaultProduct,
  },
};
