'use client';

import {
  MenuIcon,
  ShoppingCartIcon,
  LogOutIcon,
  HomeIcon,
  LogInIcon,
} from 'lucide-react';
import Link from 'next/link';
import type { Session } from 'next-auth';
import { signOut } from 'next-auth/react';

// Constants
import { IMAGES, ROUTES } from '@/constants';

// Components
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/ui/components/common/Sheet';
import { Image } from '@/ui/components/common/Image';
import { Button } from '@/ui/components/common/Button';

interface MobileMenuProps {
  session: Session | null;
  onRedirectLoginPage: () => void;
}

export const MobileMenu = ({
  session,
  onRedirectLoginPage,
}: MobileMenuProps) => {
  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: ROUTES.LOGIN });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          color="icon"
          size="icon"
          variant="primary"
          className="lg:hidden"
          aria-label="Open menu"
        >
          <MenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] sm:w-[350px] lg:hidden">
        <SheetHeader>
          <Link
            href={ROUTES.HOME}
            className="w-[60px] h-[30px] sm:w-[75px] sm:h-[38px] lg:w-[90px] lg:h-[45px]"
          >
            <Image
              src={IMAGES.LOGO}
              alt="logo"
              classNameWrapper="w-full h-full"
            />
          </Link>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-6">
          <Link
            href={ROUTES.HOME}
            className="flex items-center gap-6 px-8 py-3 text-lg font-medium text-text-secondary hover:bg-background-tertiary transition-colors"
          >
            <HomeIcon className="size-5 text-icon-primary" />
            Shop
          </Link>

          <Link
            href={ROUTES.CART}
            className="flex items-center gap-6 px-8 py-3 text-lg font-medium text-text-secondary hover:bg-background-tertiary transition-colors"
          >
            <ShoppingCartIcon className="size-5 text-icon-primary" />
            Cart
          </Link>

          <button
            onClick={session ? handleLogout : onRedirectLoginPage}
            className="flex items-center gap-6 px-8 py-3 text-lg font-medium text-text-secondary hover:bg-background-tertiary transition-colors cursor-pointer"
          >
            {session ? (
              <LogOutIcon className="size-5 text-icon-primary" />
            ) : (
              <LogInIcon className="size-5 text-icon-primary" />
            )}
            {session ? 'Log out' : 'Login'}
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
