import { render, screen } from '@testing-library/react';

// Components
import { Label } from '..';

describe('Label Component', () => {
  it('renders with default props', () => {
    render(<Label>Test Label</Label>);

    const label = screen.getByText('Test Label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('text-sm', 'font-medium');
  });

  it('renders with custom className', () => {
    render(<Label className="custom-class">Test Label</Label>);

    const label = screen.getByText('Test Label');
    expect(label).toHaveClass('custom-class');
  });

  it('renders with htmlFor attribute', () => {
    render(<Label htmlFor="test-input">Test Label</Label>);

    const label = screen.getByText('Test Label');
    expect(label).toHaveAttribute('for', 'test-input');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Label size="xs">Extra Small</Label>);
    expect(screen.getByText('Extra Small')).toHaveClass('text-xs');

    rerender(<Label size="sm">Small</Label>);
    expect(screen.getByText('Small')).toHaveClass('text-sm');

    rerender(<Label size="md">Medium</Label>);
    expect(screen.getByText('Medium')).toHaveClass('text-base');

    rerender(<Label size="lg">Large</Label>);
    expect(screen.getByText('Large')).toHaveClass('text-lg');

    rerender(<Label size="xl">Extra Large</Label>);
    expect(screen.getByText('Extra Large')).toHaveClass('text-xl');
  });

  it('renders with different weights', () => {
    const { rerender } = render(<Label weight="light">Light</Label>);
    expect(screen.getByText('Light')).toHaveClass('font-light');

    rerender(<Label weight="normal">Normal</Label>);
    expect(screen.getByText('Normal')).toHaveClass('font-normal');

    rerender(<Label weight="medium">Medium</Label>);
    expect(screen.getByText('Medium')).toHaveClass('font-medium');

    rerender(<Label weight="semibold">Semibold</Label>);
    expect(screen.getByText('Semibold')).toHaveClass('font-semibold');

    rerender(<Label weight="bold">Bold</Label>);
    expect(screen.getByText('Bold')).toHaveClass('font-bold');
  });

  it('renders with combined size and weight', () => {
    render(
      <Label size="lg" weight="bold">
        Large Bold Label
      </Label>,
    );

    const label = screen.getByText('Large Bold Label');
    expect(label).toHaveClass('text-lg', 'font-bold');
  });

  it('renders with data-slot attribute', () => {
    render(<Label>Test Label</Label>);
    const label = screen.getByText('Test Label');

    expect(label).toHaveAttribute('data-slot', 'label');
  });

  it('renders with disabled state classes', () => {
    render(<Label>Test Label</Label>);
    const label = screen.getByText('Test Label');

    expect(label).toHaveClass(
      'group-data-[disabled=true]:pointer-events-none',
      'group-data-[disabled=true]:opacity-50',
      'peer-disabled:cursor-not-allowed',
      'peer-disabled:opacity-50',
    );
  });

  it('renders with flex layout classes', () => {
    render(<Label>Test Label</Label>);
    const label = screen.getByText('Test Label');

    expect(label).toHaveClass('flex', 'items-center', 'gap-2');
  });

  it('renders with accessibility attributes', () => {
    render(
      <Label htmlFor="input-id" id="label-id">
        Test Label
      </Label>,
    );
    const label = screen.getByText('Test Label');

    expect(label).toHaveAttribute('for', 'input-id');
    expect(label).toHaveAttribute('id', 'label-id');
  });

  it('renders with select-none class', () => {
    render(<Label>Test Label</Label>);
    const label = screen.getByText('Test Label');

    expect(label).toHaveClass('select-none');
  });
});
