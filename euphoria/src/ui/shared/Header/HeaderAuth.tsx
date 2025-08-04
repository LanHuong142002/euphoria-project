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
import { ShoppingCartIcon } from '../../icons/ShoppingCartIcon';

interface HeaderAuthProps {
  user: Session | null;
  logo: string;
}

export const HeaderAuth = ({ user, logo }: HeaderAuthProps) => (
  <div className="flex items-center gap-2 sm:gap-3">
    <MobileMenu session={user} logo={logo} />

    <div className="hidden lg:block">
      <div className="flex items-center gap-[132px]">
        <SearchInput />
        <div className="flex items-center gap-3">
          <ToggleTheme />
          {user && (
            <>
              <UserDropdown />
              <Link href={ROUTES.CART}>
                <Button color="icon" size="icon" variant="primary">
                  <ShoppingCartIcon />
                </Button>
              </Link>
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
