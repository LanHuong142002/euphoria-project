'use client';

import { Session } from 'next-auth';
import { useRouter } from 'next/navigation';

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

export const HeaderAuth = ({ user, logo }: HeaderAuthProps) => {
  const { push } = useRouter();

  const handleRedirectLoginPage = () => {
    push(ROUTES.LOGIN);
  };

  const handleRedirectCartPage = () => {
    push(ROUTES.CART);
  };

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <MobileMenu
        session={user}
        onRedirectLoginPage={handleRedirectLoginPage}
        logo={logo}
      />

      <div className="hidden lg:block">
        {user ? (
          <div className="flex items-center gap-[132px]">
            <SearchInput />
            <div className="flex items-center gap-3">
              <ToggleTheme />
              <UserDropdown />
              <Button
                color="icon"
                onClick={handleRedirectCartPage}
                size="icon"
                variant="primary"
              >
                <ShoppingCartIcon />
              </Button>
            </div>
          </div>
        ) : (
          <Button
            color="primary"
            onClick={handleRedirectLoginPage}
            variant="primary"
            fontSize="xs"
            className="text-xs sm:text-sm"
          >
            Login
          </Button>
        )}
      </div>
    </div>
  );
};
