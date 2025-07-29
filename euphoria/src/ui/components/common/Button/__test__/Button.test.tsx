import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

// Components
import { Button } from '..';

describe('Button component', () => {
  test('Should render button with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeDefined();
  });

  test('Should call function onPress when user clicks button', async () => {
    const handlePress = jest.fn();
    render(<Button onClick={handlePress}>Click me</Button>);

    const button = screen.getByRole('button');

    await userEvent.click(button);

    await waitFor(() => {
      expect(handlePress).toHaveBeenCalled();
      expect(handlePress).toHaveBeenCalledTimes(1);
    });
  });

  test('Should not call function onPress when isLoading is true', async () => {
    const handlePress = jest.fn();
    render(
      <Button onClick={handlePress} isLoading>
        Click me
      </Button>,
    );

    const button = screen.getByRole('button');

    await userEvent.click(button);

    await waitFor(() => {
      expect(handlePress).not.toHaveBeenCalled();
      expect(handlePress).toHaveBeenCalledTimes(0);
    });
  });

  test('Should not call function onPress when isDisabled is true', async () => {
    const handlePress = jest.fn();
    render(
      <Button onClick={handlePress} disabled>
        Click me
      </Button>,
    );

    const button = screen.getByRole('button');

    await userEvent.click(button);

    await waitFor(() => {
      expect(handlePress).not.toHaveBeenCalled();
      expect(handlePress).toHaveBeenCalledTimes(0);
    });
  });
});
