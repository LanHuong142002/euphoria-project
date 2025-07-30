import { render, screen, fireEvent } from '@testing-library/react';
import { QuantitySelector } from '../index';

describe('QuantitySelector', () => {
  it('Should render with default props', () => {
    render(<QuantitySelector />);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByLabelText('Decrease quantity')).toBeInTheDocument();
    expect(screen.getByLabelText('Increase quantity')).toBeInTheDocument();
  });

  it('Should increase quantity when plus button is clicked', () => {
    const onChange = jest.fn();
    render(<QuantitySelector onChange={onChange} />);

    const increaseButton = screen.getByLabelText('Increase quantity');
    fireEvent.click(increaseButton);

    expect(screen.getByText('2')).toBeInTheDocument();
    expect(onChange).toHaveBeenCalledWith(2);
  });

  it('Should decrease quantity when minus button is clicked', () => {
    const onChange = jest.fn();
    render(<QuantitySelector onChange={onChange} />);

    // First increase to 2, then decrease back to 1
    const increaseButton = screen.getByLabelText('Increase quantity');
    fireEvent.click(increaseButton);
    expect(screen.getByText('2')).toBeInTheDocument();

    const decreaseButton = screen.getByLabelText('Decrease quantity');
    fireEvent.click(decreaseButton);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(onChange).toHaveBeenCalledWith(1);
  });

  it('Should not decrease below minimum value', () => {
    const onChange = jest.fn();
    render(<QuantitySelector min={1} onChange={onChange} />);

    const decreaseButton = screen.getByLabelText('Decrease quantity');
    fireEvent.click(decreaseButton);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('Should not increase above maximum value', () => {
    const onChange = jest.fn();
    render(<QuantitySelector max={5} onChange={onChange} />);

    // Click increase button multiple times to reach max
    const increaseButton = screen.getByLabelText('Increase quantity');
    for (let i = 0; i < 5; i++) {
      fireEvent.click(increaseButton);
    }

    expect(screen.getByText('5')).toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(4);
  });

  it('Should be disabled when disabled prop is true', () => {
    render(<QuantitySelector disabled />);

    const decreaseButton = screen.getByLabelText('Decrease quantity');
    const increaseButton = screen.getByLabelText('Increase quantity');

    expect(decreaseButton).toBeDisabled();
    expect(increaseButton).toBeDisabled();
  });
});
