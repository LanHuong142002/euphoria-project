import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

// Components
import { Toggle } from '..';

describe('Toggle component', () => {
  test('Should render toggle with children', () => {
    render(<Toggle>Toggle me</Toggle>);
    expect(screen.getByText('Toggle me')).toBeDefined();
  });

  test('Should render toggle with correct role', () => {
    render(<Toggle>Toggle me</Toggle>);

    expect(screen.getByRole('button')).toBeDefined();
  });

  test('Should call onPressedChange when user clicks toggle', async () => {
    const handlePressedChange = jest.fn();
    render(<Toggle onPressedChange={handlePressedChange}>Toggle me</Toggle>);

    const toggle = screen.getByRole('button');

    await userEvent.click(toggle);

    await waitFor(() => {
      expect(handlePressedChange).toHaveBeenCalled();
      expect(handlePressedChange).toHaveBeenCalledTimes(1);
    });
  });

  test('Should not call onPressedChange when disabled', async () => {
    const handlePressedChange = jest.fn();
    render(
      <Toggle onPressedChange={handlePressedChange} disabled>
        Toggle me
      </Toggle>,
    );

    const toggle = screen.getByRole('button');

    await userEvent.click(toggle);

    await waitFor(() => {
      expect(handlePressedChange).not.toHaveBeenCalled();
      expect(handlePressedChange).toHaveBeenCalledTimes(0);
    });
  });

  test('Should render with pressed state when pressed prop is true', () => {
    render(<Toggle pressed>Toggle me</Toggle>);
    const toggle = screen.getByRole('button');

    expect(toggle).toHaveAttribute('data-state', 'on');
  });

  test('Should render with unpressed state when pressed prop is false', () => {
    render(<Toggle pressed={false}>Toggle me</Toggle>);
    const toggle = screen.getByRole('button');

    expect(toggle).toHaveAttribute('data-state', 'off');
  });

  test('Should have correct accessibility attributes when disabled', () => {
    render(<Toggle disabled>Toggle me</Toggle>);
    const toggle = screen.getByRole('button');

    expect(toggle).toBeDisabled();
  });

  test('Should have correct accessibility attributes when pressed', () => {
    render(
      <Toggle pressed aria-label="Toggle button">
        Toggle me
      </Toggle>,
    );
    const toggle = screen.getByRole('button');

    expect(toggle).toHaveAttribute('aria-label', 'Toggle button');
    expect(toggle).toHaveAttribute('data-state', 'on');
  });

  test('Should handle keyboard interactions', async () => {
    const handlePressedChange = jest.fn();
    render(<Toggle onPressedChange={handlePressedChange}>Toggle me</Toggle>);

    const toggle = screen.getByRole('button');
    toggle.focus();

    await userEvent.keyboard('{Enter}');

    await waitFor(() => {
      expect(handlePressedChange).toHaveBeenCalled();
    });
  });

  test('Should not handle keyboard interactions when disabled', async () => {
    const handlePressedChange = jest.fn();
    render(
      <Toggle onPressedChange={handlePressedChange} disabled>
        Toggle me
      </Toggle>,
    );

    const toggle = screen.getByRole('button');
    toggle.focus();

    await userEvent.keyboard('{Enter}');

    await waitFor(() => {
      expect(handlePressedChange).not.toHaveBeenCalled();
    });
  });

  test('Should render with different content types', () => {
    render(
      <Toggle>
        <span>Icon</span>
        Text
      </Toggle>,
    );

    expect(screen.getByText('Icon')).toBeDefined();
    expect(screen.getByText('Text')).toBeDefined();
  });
});
