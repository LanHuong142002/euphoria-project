import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import { ModalConfirm } from '..';
import { Button } from '../../common/Button';

describe('ModalConfirm', () => {
  const Component = () => (
    <ModalConfirm
      trigger={<Button variant="outline">Alert Dialog</Button>}
      title="Are you absolutely sure?"
      description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
      onCancel={jest.fn()}
      onConfirm={jest.fn()}
    />
  );

  it('Should render trigger button', () => {
    render(<Component />);

    const triggerButton = screen.getByRole('button', { name: 'Alert Dialog' });
    expect(triggerButton).toBeInTheDocument();
  });

  it('Should open modal when trigger button is clicked', async () => {
    const user = userEvent.setup();
    render(<Component />);

    const triggerButton = screen.getByRole('button', { name: 'Alert Dialog' });
    await user.click(triggerButton);

    // Check if modal content is visible
    expect(screen.getByText('Are you absolutely sure?')).toBeInTheDocument();
    expect(
      screen.getByText(/This action cannot be undone/),
    ).toBeInTheDocument();
  });

  it('Should display modal title and description', async () => {
    const user = userEvent.setup();
    render(<Component />);

    const triggerButton = screen.getByRole('button', { name: 'Alert Dialog' });
    await user.click(triggerButton);

    expect(
      screen.getByRole('heading', { name: 'Are you absolutely sure?' }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/This action cannot be undone/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/This will permanently delete your account/),
    ).toBeInTheDocument();
  });

  it('Should display cancel and continue buttons', async () => {
    const user = userEvent.setup();
    render(<Component />);

    const triggerButton = screen.getByRole('button', { name: 'Alert Dialog' });
    await user.click(triggerButton);

    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    const continueButton = screen.getByRole('button', { name: 'Confirm' });

    expect(cancelButton).toBeInTheDocument();
    expect(continueButton).toBeInTheDocument();
  });

  it('Should close modal when cancel button is clicked', async () => {
    const user = userEvent.setup();
    render(<Component />);

    // Open modal
    const triggerButton = screen.getByRole('button', { name: 'Alert Dialog' });
    await user.click(triggerButton);

    // Verify modal is open
    expect(screen.getByText('Are you absolutely sure?')).toBeInTheDocument();

    // Click cancel
    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    await user.click(cancelButton);

    // Verify modal is closed
    await waitFor(() => {
      expect(
        screen.queryByText('Are you absolutely sure?'),
      ).not.toBeInTheDocument();
    });
  });

  it('Should close modal when continue button is clicked', async () => {
    const user = userEvent.setup();
    render(<Component />);

    // Open modal
    const triggerButton = screen.getByRole('button', { name: 'Alert Dialog' });
    await user.click(triggerButton);

    // Verify modal is open
    expect(screen.getByText('Are you absolutely sure?')).toBeInTheDocument();

    // Click continue
    const continueButton = screen.getByRole('button', { name: 'Confirm' });
    await user.click(continueButton);

    // Verify modal is closed
    await waitFor(() => {
      expect(
        screen.queryByText('Are you absolutely sure?'),
      ).not.toBeInTheDocument();
    });
  });
});
