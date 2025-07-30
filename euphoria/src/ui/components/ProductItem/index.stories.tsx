import type { Meta, StoryObj } from '@storybook/nextjs';

// Components
import { ProductItem } from '.';

// Constants
import { IMAGES } from '@/constants';

const meta: Meta<typeof ProductItem> = {
  title: 'Components/ProductItem',
  component: ProductItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'text' },
      description: 'Product name',
    },
    brand: {
      control: { type: 'text' },
      description: 'Brand name',
    },
    price: {
      control: { type: 'number' },
      description: 'Product price',
    },
    image: {
      control: { type: 'text' },
      description: 'Product image URL',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Leaves Pattern White Dress',
    brand: "paypal's Brand",
    price: 77.0,
    image: IMAGES.MOCK_PRODUCT_IMAGE,
  },
};

export const LongProductName: Story = {
  args: {
    name: 'This is a very long product name that demonstrates text truncation with ellipsis when the text exceeds the container width',
    brand: 'Long Brand Name',
    price: 149.99,
    image: IMAGES.MOCK_PRODUCT_IMAGE,
  },
};

export const LongBrandName: Story = {
  args: {
    name: 'Simple Product',
    brand:
      'This is a very long brand name that should be truncated with ellipsis when it exceeds the available space',
    price: 89.99,
    image: IMAGES.MOCK_PRODUCT_IMAGE,
  },
};
