import { render, screen, fireEvent } from '@testing-library/react';

// Components
import { CartItem } from '..';

const mockProduct = {
  id: '1',
  name: 'Lavender Hoodie',
  color: 'Lavender',
  size: 'XXL',
  price: 119.0,
  images: ['/test-image.jpg'],
};

describe('CartItem', () => {
  it('Should render with product details', () => {
    render(<CartItem product={mockProduct} />);

    expect(screen.getByText('Lavender Hoodie')).toBeInTheDocument();
    expect(screen.getByText('Color: Lavender')).toBeInTheDocument();
    expect(screen.getByText('Size: XXL')).toBeInTheDocument();
    expect(screen.getAllByText('$119.00')[0]).toBeInTheDocument();
  });

  it('Should display quantity selector', () => {
    render(<CartItem product={mockProduct} />);

    const decreaseButtons = screen.getAllByLabelText('Decrease quantity');
    const increaseButtons = screen.getAllByLabelText('Increase quantity');

    expect(decreaseButtons).toHaveLength(2);
    expect(increaseButtons).toHaveLength(2);
    expect(screen.getAllByText('1')).toHaveLength(2);
  });

  it('Should call onQuantityChange when quantity changes', () => {
    const onQuantityChange = jest.fn();
    render(
      <CartItem product={mockProduct} onQuantityChange={onQuantityChange} />,
    );

    const increaseButtons = screen.getAllByLabelText('Increase quantity');
    fireEvent.click(increaseButtons[0]);

    expect(onQuantityChange).toHaveBeenCalledWith(2);
  });

  it('Should call onRemove when remove button is clicked', () => {
    const onRemove = jest.fn();
    render(<CartItem product={mockProduct} onRemove={onRemove} />);

    const removeButton = screen.getByLabelText('Remove item from cart');
    fireEvent.click(removeButton);

    expect(onRemove).toHaveBeenCalled();
  });

  it('Should display correct total price based on quantity', () => {
    render(<CartItem product={mockProduct} quantity={2} />);

    expect(screen.getByText('$238.00')).toBeInTheDocument();
  });

  it('Should be disabled when disabled prop is true', () => {
    render(<CartItem product={mockProduct} disabled />);

    const decreaseButtons = screen.getAllByLabelText('Decrease quantity');
    const increaseButtons = screen.getAllByLabelText('Increase quantity');
    const removeButton = screen.getByLabelText('Remove item from cart');

    decreaseButtons.forEach((button) => {
      expect(button).toBeDisabled();
    });
    increaseButtons.forEach((button) => {
      expect(button).toBeDisabled();
    });
    expect(removeButton).toBeDisabled();
  });
});
