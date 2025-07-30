import { render, screen } from '@testing-library/react';

// Components
import { Badge } from '..';

describe('Badge', () => {
  it('Should render with default variant', () => {
    render(<Badge>Default Badge</Badge>);

    const badge = screen.getByText('Default Badge');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('bg-badge-primary', 'text-badge-secondary');
  });

  it('Should render with icon and text', () => {
    const { container } = render(
      <Badge variant="default">
        <svg data-testid="icon" />
        Badge with Icon
      </Badge>,
    );

    expect(screen.getByText('Badge with Icon')).toBeInTheDocument();
    expect(container.querySelector('[data-testid="icon"]')).toBeInTheDocument();
  });
});
