import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '../index';

describe('DropdownMenu', () => {
  const user = userEvent.setup();

  describe('Basic Functionality', () => {
    it('renders trigger button', () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      expect(
        screen.getByRole('button', { name: 'Open Menu' }),
      ).toBeInTheDocument();
    });

    it('opens menu when trigger is clicked', async () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      const trigger = screen.getByRole('button', { name: 'Open Menu' });
      await user.click(trigger);

      await waitFor(() => {
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
      });
    });
  });

  describe('DropdownMenuItem', () => {
    it('renders menu item with text', async () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      const trigger = screen.getByRole('button', { name: 'Open Menu' });
      await user.click(trigger);

      await waitFor(() => {
        expect(screen.getByText('Profile')).toBeInTheDocument();
      });
    });

    it('renders menu item with icon', async () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <UserIcon className="size-4" />
              Profile
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      const trigger = screen.getByRole('button', { name: 'Open Menu' });
      await user.click(trigger);

      await waitFor(() => {
        expect(screen.getByText('Profile')).toBeInTheDocument();
      });
    });

    it('renders destructive variant', async () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      const trigger = screen.getByRole('button', { name: 'Open Menu' });
      await user.click(trigger);

      await waitFor(() => {
        const deleteItem = screen.getByText('Delete');
        expect(deleteItem).toBeInTheDocument();
        expect(
          deleteItem.closest('[data-variant="destructive"]'),
        ).toBeInTheDocument();
      });
    });

    it('renders disabled menu item', async () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem disabled>Disabled Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      const trigger = screen.getByRole('button', { name: 'Open Menu' });
      await user.click(trigger);

      await waitFor(() => {
        const disabledItem = screen.getByText('Disabled Item');
        expect(disabledItem).toBeInTheDocument();
        expect(disabledItem).toHaveAttribute('aria-disabled', 'true');
      });
    });

    it('renders menu item with shortcut', async () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      const trigger = screen.getByRole('button', { name: 'Open Menu' });
      await user.click(trigger);

      await waitFor(() => {
        expect(screen.getByText('Settings')).toBeInTheDocument();
        expect(screen.getByText('⌘S')).toBeInTheDocument();
      });
    });
  });

  describe('DropdownMenuGroup and Label', () => {
    it('renders grouped menu items with labels', async () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      const trigger = screen.getByRole('button', { name: 'Open Menu' });
      await user.click(trigger);

      await waitFor(() => {
        expect(screen.getByText('Account')).toBeInTheDocument();
        expect(screen.getByText('Profile')).toBeInTheDocument();
        expect(screen.getByText('Settings')).toBeInTheDocument();
        expect(screen.getByText('Actions')).toBeInTheDocument();
        expect(screen.getByText('Logout')).toBeInTheDocument();
      });
    });
  });

  describe('DropdownMenuCheckboxItem', () => {
    it('renders checkbox item', async () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem checked>
              Show notifications
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      const trigger = screen.getByRole('button', { name: 'Open Menu' });
      await user.click(trigger);

      await waitFor(() => {
        expect(screen.getByText('Show notifications')).toBeInTheDocument();
        expect(screen.getByRole('menuitemcheckbox')).toBeInTheDocument();
      });
    });

    it('handles checkbox state changes', async () => {
      const handleCheckedChange = jest.fn();

      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem
              checked={false}
              onCheckedChange={handleCheckedChange}
            >
              Show notifications
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      const trigger = screen.getByRole('button', { name: 'Open Menu' });
      await user.click(trigger);

      await waitFor(() => {
        const checkbox = screen.getByRole('menuitemcheckbox');
        expect(checkbox).toBeInTheDocument();
      });

      const checkbox = screen.getByRole('menuitemcheckbox');
      await user.click(checkbox);

      expect(handleCheckedChange).toHaveBeenCalledWith(true);
    });
  });

  describe('DropdownMenuRadioGroup and RadioItem', () => {
    it('renders radio group with items', async () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup value="list">
              <DropdownMenuRadioItem value="list">
                List view
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="grid">
                Grid view
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      const trigger = screen.getByRole('button', { name: 'Open Menu' });
      await user.click(trigger);

      await waitFor(() => {
        expect(screen.getByText('List view')).toBeInTheDocument();
        expect(screen.getByText('Grid view')).toBeInTheDocument();
        expect(screen.getAllByRole('menuitemradio')).toHaveLength(2);
      });
    });

    it('handles radio selection', async () => {
      const handleValueChange = jest.fn();

      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup
              value="list"
              onValueChange={handleValueChange}
            >
              <DropdownMenuRadioItem value="list">
                List view
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="grid">
                Grid view
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      const trigger = screen.getByRole('button', { name: 'Open Menu' });
      await user.click(trigger);

      await waitFor(() => {
        const gridRadio = screen.getByRole('menuitemradio', {
          name: 'Grid view',
        });
        expect(gridRadio).toBeInTheDocument();
      });

      const gridRadio = screen.getByRole('menuitemradio', {
        name: 'Grid view',
      });
      await user.click(gridRadio);

      expect(handleValueChange).toHaveBeenCalledWith('grid');
    });
  });

  describe('DropdownMenuSub', () => {
    it('renders submenu', async () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>More tools</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Save as...</DropdownMenuItem>
                <DropdownMenuItem>Export...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      const trigger = screen.getByRole('button', { name: 'Open Menu' });
      await user.click(trigger);

      await waitFor(() => {
        expect(screen.getByText('Profile')).toBeInTheDocument();
        expect(screen.getByText('More tools')).toBeInTheDocument();
      });

      // Click on submenu trigger to open submenu
      const subTrigger = screen.getByText('More tools');
      await user.click(subTrigger);

      await waitFor(
        () => {
          expect(screen.getByText('Save as...')).toBeInTheDocument();
          expect(screen.getByText('Export...')).toBeInTheDocument();
        },
        { timeout: 3000 },
      );
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', async () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      const trigger = screen.getByRole('button', { name: 'Open Menu' });
      expect(trigger).toHaveAttribute('aria-haspopup', 'menu');

      await user.click(trigger);

      await waitFor(() => {
        const menu = screen.getByRole('menu');
        expect(menu).toBeInTheDocument();
        expect(trigger).toHaveAttribute('aria-expanded', 'true');
      });
    });

    it('supports keyboard navigation', async () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
            <DropdownMenuItem>Item 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      const trigger = screen.getByRole('button', { name: 'Open Menu' });
      await user.click(trigger);

      await waitFor(() => {
        expect(screen.getByText('Item 1')).toBeInTheDocument();
      });

      // Navigate with arrow keys
      fireEvent.keyDown(screen.getByRole('menu'), { key: 'ArrowDown' });
      fireEvent.keyDown(screen.getByRole('menu'), { key: 'ArrowDown' });

      // Press Enter to select
      fireEvent.keyDown(screen.getByRole('menu'), { key: 'Enter' });
    });
  });

  describe('Styling and Classes', () => {
    it('applies custom className', async () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger className="custom-trigger">
            Open Menu
          </DropdownMenuTrigger>
          <DropdownMenuContent className="custom-content">
            <DropdownMenuItem className="custom-item">Profile</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      const trigger = screen.getByRole('button', { name: 'Open Menu' });
      expect(trigger).toHaveClass('custom-trigger');

      await user.click(trigger);

      await waitFor(() => {
        const content = screen.getByRole('menu');
        expect(content).toHaveClass('custom-content');

        const item = screen.getByText('Profile');
        expect(item.closest('[data-slot="dropdown-menu-item"]')).toHaveClass(
          'custom-item',
        );
      });
    });

    it('applies data attributes correctly', async () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem inset variant="destructive">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      const trigger = screen.getByRole('button', { name: 'Open Menu' });
      await user.click(trigger);

      await waitFor(() => {
        const item = screen.getByText('Delete');
        const itemElement = item.closest('[data-slot="dropdown-menu-item"]');
        expect(itemElement).toHaveAttribute('data-inset', 'true');
        expect(itemElement).toHaveAttribute('data-variant', 'destructive');
      });
    });
  });
});
