import type { Meta, StoryObj } from '@storybook/nextjs';

// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from './index';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/Common/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 bg-button-primary text-button-tertiary rounded-md hover:opacity-90">
        Open Menu
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          Profile
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Settings
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 bg-button-primary text-button-tertiary rounded-md hover:opacity-90">
        Account Menu
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Team</DropdownMenuLabel>
          <DropdownMenuItem>Invite users</DropdownMenuItem>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithSubMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 bg-button-primary text-button-tertiary rounded-md hover:opacity-90">
        More Options
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>More tools</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Save as...</DropdownMenuItem>
            <DropdownMenuItem>Export...</DropdownMenuItem>
            <DropdownMenuItem>Print...</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const DisabledItems: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 bg-button-primary text-button-tertiary rounded-md hover:opacity-90">
        Actions
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Edit Profile</DropdownMenuItem>
        <DropdownMenuItem disabled>Advanced Settings</DropdownMenuItem>
        <DropdownMenuItem>Create New</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled variant="destructive">
          Delete Account
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
