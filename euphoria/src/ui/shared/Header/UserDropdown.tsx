import { LogOutIcon } from 'lucide-react';

// Constants
import { ROUTES } from '@/constants';

// NextAuth
import { signOut } from 'next-auth/react';

// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/components/common/DropdownMenu';
import { Button } from '@/ui/components/common/Button';

// Icons
import { UserIcon } from '@/ui/icons/UserIcon';

export const UserDropdown = () => {
  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: ROUTES.LOGIN });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          color="icon"
          size="icon"
          variant="primary"
          aria-label="User account menu"
          aria-haspopup="menu"
          aria-expanded={false}
        >
          <UserIcon aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        role="menu"
        aria-label="User account options"
      >
        <DropdownMenuItem
          variant="destructive"
          onClick={handleLogout}
          role="menuitem"
          aria-label="Sign out of your account"
        >
          <LogOutIcon className="size-4" aria-hidden="true" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
