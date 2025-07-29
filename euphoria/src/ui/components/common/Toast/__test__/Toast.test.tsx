import { render, screen } from '@testing-library/react';
import { Toaster } from '../index';

// Mock next-themes
jest.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
  }),
}));

// Mock sonner
jest.mock('sonner', () => ({
  Toaster: ({
    children,
    ...props
  }: {
    children?: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <div data-testid="sonner-toaster" {...props}>
      {children}
    </div>
  ),
}));

describe('Toaster', () => {
  it('should render with correct props', () => {
    render(<Toaster />);

    const toaster = screen.getByTestId('sonner-toaster');
    expect(toaster).toBeInTheDocument();
    expect(toaster).toHaveClass('toaster', 'group');
    expect(toaster).toHaveAttribute('theme', 'light');
  });

  it('should pass through additional props', () => {
    const customProps = {
      position: 'top-right' as const,
      duration: 5000,
    };

    render(<Toaster {...customProps} />);

    const toaster = screen.getByTestId('sonner-toaster');
    expect(toaster).toHaveAttribute('position', 'top-right');
    expect(toaster).toHaveAttribute('duration', '5000');
  });
});
