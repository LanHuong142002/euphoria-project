'use client';

import { useState } from 'react';
import {
  MenuIcon,
  ShoppingCartIcon,
  LogOutIcon,
  HomeIcon,
  LogInIcon,
  Sun,
  Moon,
  Cog,
} from 'lucide-react';
import Link from 'next/link';
import type { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

// Constants
import { ROUTES } from '@/constants';

// Components
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/ui/components/common/Sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/ui/components/common/Accordion';
import { SearchInput } from '../SearchInput';
import { Image } from '@/ui/components/common/Image';
import { Separator } from '@/ui/components/common/Separator';

// Hooks
import { useChangeTheme } from '@/hooks';

// Utils
import { cn } from '@/utils';

const MENU_ITEMS = [
  {
    label: 'Shop',
    href: ROUTES.HOME,
    icon: HomeIcon,
  },
  {
    label: 'Cart',
    href: ROUTES.CART,
    icon: ShoppingCartIcon,
  },
];

interface MobileMenuProps {
  logo: string;
  session: Session | null;
}

export const MobileMenu = ({ session, logo }: MobileMenuProps) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const { onThemeLight, onThemeDark, onThemeSystem, theme } = useChangeTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  const handleLogout = async () => {
    handleMenuClick();
    await signOut({ redirect: true, callbackUrl: ROUTES.LOGIN });
  };

  const handleRedirectLoginPage = () => {
    handleMenuClick();
    push(ROUTES.LOGIN);
  };

  const MENU_THEME_ITEMS = [
    {
      label: 'Light',
      onClick: onThemeLight,
      icon: Sun,
    },
    {
      label: 'Dark',
      onClick: onThemeDark,
      icon: Moon,
    },
    {
      label: 'System',
      onClick: onThemeSystem,
      icon: Cog,
    },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <MenuIcon
          className="lg:hidden h-5 w-5 cursor-pointer"
          aria-label="Open menu"
        />
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] sm:w-[350px] lg:hidden">
        <SheetHeader className="px-8 pt-4">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <Link
            href={ROUTES.HOME}
            className="w-[60px] h-[30px] sm:w-[75px] sm:h-[38px]"
          >
            <Image src={logo} alt="logo" classNameWrapper="w-full h-full" />
          </Link>
        </SheetHeader>

        {/* Menu */}
        <div className="flex flex-col gap-4 mt-6">
          <div className="px-8 w-full">
            <SearchInput className="w-full" onClick={handleMenuClick} />
          </div>
          {MENU_ITEMS.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-6 px-8 py-3 text-md font-medium text-text-secondary hover:bg-background-tertiary transition-colors',
                pathname === href && 'bg-background-tertiary',
              )}
              onClick={handleMenuClick}
            >
              <Icon className="size-5 text-icon-primary" />
              {label}
            </Link>
          ))}

          <button
            onClick={session ? handleLogout : handleRedirectLoginPage}
            className="flex items-center gap-6 px-8 py-3 text-md font-medium text-text-secondary hover:bg-background-tertiary transition-colors cursor-pointer"
          >
            {session ? (
              <LogOutIcon className="size-5 text-icon-primary" />
            ) : (
              <LogInIcon className="size-5 text-icon-primary" />
            )}
            {session ? 'Log out' : 'Login'}
          </button>
        </div>

        {/* Change Theme */}
        <SheetFooter className="pb-8">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <p className="text-md font-medium text-text-secondary">
                  Change Theme
                </p>
              </AccordionTrigger>
              <AccordionContent className="pl-7">
                {MENU_THEME_ITEMS.map(
                  ({ label, onClick, icon: Icon }, index) => {
                    const isActive = theme === label.toLowerCase();
                    const isLastItem = index === MENU_THEME_ITEMS.length - 1;

                    return (
                      <>
                        <div
                          key={label}
                          onClick={onClick}
                          className={cn(
                            'flex items-center gap-6 py-2 pl-3 text-md font-medium text-text-secondary hover:bg-background-tertiary transition-colors',
                            isActive && 'bg-background-tertiary',
                          )}
                        >
                          <Icon className="size-5 text-icon-primary" />
                          {label}
                        </div>
                        {!isLastItem && <Separator />}
                      </>
                    );
                  },
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
