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
          aria-label="Click user profile"
        >
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          variant="destructive"
          onClick={handleLogout}
          aria-label="Click logout"
        >
          <LogOutIcon className="size-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
