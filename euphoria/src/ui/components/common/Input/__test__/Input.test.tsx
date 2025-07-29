import userEvent from '@testing-library/user-event';
import { render, screen, waitFor, act } from '@testing-library/react';

// Components
import { Input } from '..';

describe('Input component', () => {
  test('Should render input with placeholder', () => {
    render(<Input placeholder="Enter text" />);

    expect(screen.getByPlaceholderText('Enter text')).toBeDefined();
  });

  test('Should render input with label', () => {
    render(<Input label="Email Address" placeholder="Enter email" />);

    expect(screen.getByText('Email Address')).toBeDefined();
  });

  test('Should show password toggle when showPasswordToggle is true', () => {
    render(
      <Input
        placeholder="Enter password"
        type="password"
        showPasswordToggle={true}
      />,
    );

    expect(screen.getByText('Show')).toBeDefined();
  });

  test('Should toggle password visibility when clicking show/hide button', async () => {
    const user = userEvent.setup();
    render(
      <Input
        placeholder="Enter password"
        type="password"
        showPasswordToggle={true}
      />,
    );

    let input = screen.getByPlaceholderText('Enter password');
    const toggleButton = screen.getByText('Show');

    // Initially should be password type
    expect(input).toHaveAttribute('type', 'password');

    // Click to show password
    await act(async () => {
      await user.click(toggleButton);
    });

    // Wait for the state to update and check both the button text and input type
    await waitFor(() => {
      expect(screen.getByText('Hide')).toBeDefined();
    });

    // Get fresh reference to input after state update
    input = screen.getByPlaceholderText('Enter password');
    await waitFor(() => {
      expect(input).toHaveAttribute('type', 'text');
    });

    // Click to hide password
    await act(async () => {
      await user.click(screen.getByText('Hide'));
    });

    await waitFor(() => {
      expect(screen.getByText('Show')).toBeDefined();
    });

    // Get fresh reference to input after state update
    input = screen.getByPlaceholderText('Enter password');
    await waitFor(() => {
      expect(input).toHaveAttribute('type', 'password');
    });
  });

  test('Should render left element when provided', () => {
    render(
      <Input
        placeholder="Search"
        leftElement={<div data-testid="search-icon">🔍</div>}
      />,
    );

    expect(screen.getByTestId('search-icon')).toBeDefined();
  });

  test('Should render right element when provided', () => {
    render(
      <Input
        placeholder="Enter text"
        rightElement={<div data-testid="right-icon">→</div>}
      />,
    );

    expect(screen.getByTestId('right-icon')).toBeDefined();
  });

  test('Should apply error variant when error is provided', () => {
    render(
      <Input
        placeholder="Enter email"
        error="Invalid email"
        variant="default"
      />,
    );
    const input = screen.getByPlaceholderText('Enter email');

    expect(input).toHaveClass('border-input-error');
  });

  test('Should not call onChange when disabled', async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();
    render(
      <Input
        placeholder="Enter text"
        disabled={true}
        onChange={handleChange}
      />,
    );

    const input = screen.getByPlaceholderText('Enter text');
    await user.type(input, 'test');

    expect(handleChange).not.toHaveBeenCalled();
  });

  test('Should call onChange when user types', async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();
    render(<Input placeholder="Enter text" onChange={handleChange} />);

    const input = screen.getByPlaceholderText('Enter text');
    await user.type(input, 'test');

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalled();
    });
  });

  test('Should apply different sizes correctly', () => {
    const { rerender } = render(<Input placeholder="Small input" size="sm" />);
    let input = screen.getByPlaceholderText('Small input');

    expect(input).toHaveClass('text-base');

    rerender(<Input placeholder="Large input" size="lg" />);
    input = screen.getByPlaceholderText('Large input');

    expect(input).toHaveClass('text-base');
  });

  test('Should apply different variants correctly', () => {
    const { rerender } = render(
      <Input placeholder="Default input" variant="default" />,
    );
    let input = screen.getByPlaceholderText('Default input');

    expect(input).toHaveClass('border-input-tertiary');

    rerender(<Input placeholder="Tertiary input" variant="tertiary" />);
    input = screen.getByPlaceholderText('Tertiary input');

    expect(input).toHaveClass('border-none');
  });

  test('Should not render label section when no label and no password toggle', () => {
    render(<Input placeholder="Enter text" />);

    const input = screen.getByPlaceholderText('Enter text');
    const parent = input.closest('div');

    expect(parent?.parentElement?.children).toHaveLength(1); // Only input container
  });

  test('Should render label section when label is provided', () => {
    render(<Input placeholder="Enter text" label="Email" />);

    const input = screen.getByPlaceholderText('Enter text');
    const parent = input.closest('div');

    expect(parent?.parentElement?.children).toHaveLength(2); // Label section + input container
  });
});
