import { ReactNode } from 'react';

// Constants
import {
  SCREEN_HEIGHT_WITH_HEADER_MOBILE,
  SCREEN_HEIGHT_WITH_HEADER_DESKTOP,
} from '@/constants';

// Utils
import { cn } from '@/utils';

const Layout = ({ children }: { children: ReactNode }) => (
  <main
    id="main-content"
    role="main"
    className={cn(
      'flex flex-col',
      SCREEN_HEIGHT_WITH_HEADER_MOBILE,
      SCREEN_HEIGHT_WITH_HEADER_DESKTOP,
    )}
  >
    {children}
  </main>
);

export default Layout;
