'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import type { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

// Constants
import { IMAGES, LOGO_URL, ROUTES } from '@/constants';

// Components
import { HeaderAuth } from './HeaderAuth';
import { Image } from '@/ui/components/common/Image';

// Utils
import { cn } from '@/utils';

interface HeaderProps {
  session: Session | null;
}

export const Header = ({ session: serverSession }: HeaderProps) => {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const { data: clientSession, update } = useSession();
  const [logo, setLogo] = useState<string>(IMAGES.LOGO);

  // Use client session if available, otherwise fall back to server session
  const session = clientSession || serverSession;

  // Force session update when component mounts
  useEffect(() => {
    if (serverSession && !clientSession) {
      update();
    }
  }, [serverSession, clientSession, update]);

  useEffect(() => {
    if (resolvedTheme) {
      setLogo(LOGO_URL(resolvedTheme === 'dark'));
    }
  }, [resolvedTheme]);

  return (
    <header className="border-b border-border-primary">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-0 py-4 sm:py-6 lg:py-[34px]">
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-22.5">
          <Link
            href={ROUTES.HOME}
            className="w-[60px] h-[30px] sm:w-[75px] sm:h-[38px] lg:w-[90px] lg:h-[45px]"
          >
            <Image src={logo} alt="logo" classNameWrapper="w-full h-full" />
          </Link>
          {session && (
            <Link
              href={ROUTES.HOME}
              className={cn(
                'font-medium text-base sm:text-lg lg:text-[22px] transition-colors duration-300 hover:opacity-70 hidden lg:block',
                pathname === ROUTES.HOME
                  ? 'text-text-secondary'
                  : 'text-text-primary',
              )}
            >
              Shop
            </Link>
          )}
        </div>
        <HeaderAuth user={session} logo={logo} />
      </div>
    </header>
  );
};
