import Link from 'next/link';
import { Session } from 'next-auth';

// Constants
import { ROUTES } from '@/constants';

// Components
import { MobileMenu } from './MobileMenu';
import { ToggleTheme } from './ToggleTheme';
import { SearchInput } from '../SearchInput';
import { UserDropdown } from './UserDropdown';
import { Button } from '../../components/common/Button';

// Icons
import { CartTotal } from './CartTotal';

interface HeaderAuthProps {
  user: Session | null;
  logo: string;
}

export const HeaderAuth = ({ user, logo }: HeaderAuthProps) => (
  <div className="flex items-center gap-2 sm:gap-3">
    {user && (
      <div className="lg:hidden pr-4">
        <CartTotal />
      </div>
    )}
    <MobileMenu session={user} logo={logo} />

    <div className="hidden lg:block">
      <div className="flex items-center gap-[132px]">
        <SearchInput />
        <div className="flex items-center gap-3">
          <ToggleTheme />
          {user && (
            <>
              <UserDropdown />
              <CartTotal />
            </>
          )}

          {!user && (
            <Link href={ROUTES.LOGIN}>
              <Button
                color="primary"
                variant="primary"
                fontSize="xs"
                className="text-xs sm:text-sm"
              >
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
);
