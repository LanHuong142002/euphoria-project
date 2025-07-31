import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

// Config
import { auth } from '@/config';

// Components
import { Header } from '@/ui/shared/Header';
import { Toaster } from '@/ui/components/common/Toast';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = async ({ children }: ProvidersProps) => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <Header session={session} />
      {children}
      <Toaster />
    </SessionProvider>
  );
};
