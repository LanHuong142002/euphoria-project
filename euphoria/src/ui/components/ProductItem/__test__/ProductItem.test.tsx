import { render, screen } from '@testing-library/react';

// Components
import { ProductItem } from '..';

// Constants
import { IMAGES } from '@/constants';

const mockProduct = {
  name: 'Leaves Pattern White Dress',
  brand: "paypal's Brand",
  price: 77.0,
  image: IMAGES.MOCK_PRODUCT_IMAGE,
};

describe('ProductItem', () => {
  it('Should render with all product details', () => {
    render(<ProductItem {...mockProduct} />);

    expect(screen.getByText('Leaves Pattern White Dress')).toBeInTheDocument();
    expect(screen.getByText("paypal's Brand")).toBeInTheDocument();
    expect(screen.getByText('$77.00')).toBeInTheDocument();
  });

  it('Should render product image with correct alt text', () => {
    render(<ProductItem {...mockProduct} />);

    const image = screen.getByAltText('Leaves Pattern White Dress');
    expect(image).toBeInTheDocument();
    // Next.js Image component transforms the src, so we just check it exists
    expect(image).toHaveAttribute('src');
  });

  it('Should render price badge with formatted price', () => {
    render(<ProductItem {...mockProduct} />);

    const priceBadge = screen.getByText('$77.00');
    expect(priceBadge).toBeInTheDocument();
    expect(priceBadge.closest('[data-slot="badge"]')).toBeInTheDocument();
  });
});
