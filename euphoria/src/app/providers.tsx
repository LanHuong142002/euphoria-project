'use client';

import { ReactNode } from 'react';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

// Components
import { Header } from '@/ui/shared/Header';
import { Toaster } from '@/ui/components/common/Toast';

// Contexts
import { CartProvider } from '@/contexts';

interface ProvidersProps {
  children: ReactNode;
  session: Session | null;
}

export const Providers = ({ children, session }: ProvidersProps) => (
  <SessionProvider session={session}>
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <CartProvider>
        <Header session={session} />
        {children}
        <Toaster />
      </CartProvider>
    </NextThemesProvider>
  </SessionProvider>
);
