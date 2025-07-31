import { render, screen, fireEvent } from '@testing-library/react';
import { Slider } from '..';

describe('Slider', () => {
  const defaultProps = {
    min: 0,
    max: 100,
    defaultValue: [20, 80],
  };

  it('Should render without crashing', () => {
    render(<Slider {...defaultProps} />);
    const sliders = screen.getAllByRole('slider');

    expect(sliders).toHaveLength(2);
  });

  it('Should render with correct default values', () => {
    render(<Slider {...defaultProps} />);
    const sliders = screen.getAllByRole('slider');

    expect(sliders).toHaveLength(2);
    expect(sliders[0]).toHaveValue(20);
    expect(sliders[1]).toHaveValue(80);
  });

  it('Should render in controlled mode with provided value', () => {
    const value = [30, 70];
    render(<Slider {...defaultProps} value={value} />);
    const sliders = screen.getAllByRole('slider');

    expect(sliders[0]).toHaveValue(30);
    expect(sliders[1]).toHaveValue(70);
  });

  it('Should call onRangeChange when value changes', () => {
    const onRangeChange = jest.fn();
    render(<Slider {...defaultProps} onRangeChange={onRangeChange} />);

    const sliders = screen.getAllByRole('slider');
    // Simulate keyboard interaction to change value
    fireEvent.keyDown(sliders[0], { key: 'ArrowRight' });

    expect(onRangeChange).toHaveBeenCalled();
  });

  it('Should respect min and max constraints', () => {
    render(<Slider min={10} max={90} defaultValue={[20, 80]} />);
    const sliders = screen.getAllByRole('slider');

    expect(sliders[0]).toHaveAttribute('aria-valuemin', '10');
    expect(sliders[0]).toHaveAttribute('aria-valuemax', '90');
    expect(sliders[1]).toHaveAttribute('aria-valuemin', '10');
    expect(sliders[1]).toHaveAttribute('aria-valuemax', '90');
  });

  it('Should apply custom className', () => {
    const customClass = 'custom-slider-class';
    render(<Slider {...defaultProps} className={customClass} />);

    const sliderRoot = screen
      .getAllByRole('slider')[0]
      .closest('[data-slot="slider"]');
    expect(sliderRoot).toHaveClass(customClass);
  });

  it('Should handle disabled state', () => {
    render(<Slider {...defaultProps} disabled />);
    const sliderRoot = screen
      .getAllByRole('slider')[0]
      .closest('[data-slot="slider"]');

    expect(sliderRoot).toHaveAttribute('aria-disabled', 'true');
  });

  it('Should handle step prop', () => {
    render(<Slider {...defaultProps} step={5} />);
    const sliders = screen.getAllByRole('slider');

    // Check that sliders are rendered with step prop
    expect(sliders).toHaveLength(2);
    sliders.forEach((slider) => {
      expect(slider).toHaveAttribute('aria-valuemin');
      expect(slider).toHaveAttribute('aria-valuemax');
    });
  });

  it('Should update when controlled value changes', () => {
    const { rerender } = render(<Slider {...defaultProps} value={[20, 80]} />);

    let sliders = screen.getAllByRole('slider');
    expect(sliders[0]).toHaveValue(20);
    expect(sliders[1]).toHaveValue(80);

    rerender(<Slider {...defaultProps} value={[30, 70]} />);

    sliders = screen.getAllByRole('slider');
    expect(sliders[0]).toHaveValue(30);
    expect(sliders[1]).toHaveValue(70);
  });

  it('Should maintain accessibility attributes', () => {
    render(<Slider {...defaultProps} aria-label="Price range" />);
    const sliders = screen.getAllByRole('slider');

    sliders.forEach((slider) => {
      expect(slider).toHaveAttribute('aria-label');
    });
  });

  it('Should handle single value array', () => {
    render(<Slider {...defaultProps} defaultValue={[50]} />);
    const sliders = screen.getAllByRole('slider');

    expect(sliders).toHaveLength(1);
    expect(sliders[0]).toHaveValue(50);
  });

  it('Should handle empty value array', () => {
    render(<Slider {...defaultProps} defaultValue={[]} />);
    const sliders = screen.queryAllByRole('slider');

    expect(sliders).toHaveLength(0);
  });

  it('Should render track and range elements', () => {
    render(<Slider {...defaultProps} />);

    const sliderRoot = screen
      .getAllByRole('slider')[0]
      .closest('[data-slot="slider"]');
    const track = sliderRoot?.querySelector('[data-slot="slider-track"]');
    const range = sliderRoot?.querySelector('[data-slot="slider-range"]');

    expect(track).toBeInTheDocument();
    expect(range).toBeInTheDocument();
  });
});
