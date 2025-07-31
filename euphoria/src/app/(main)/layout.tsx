import { ReactNode } from 'react';

// Constants
import {
  SCREEN_HEIGHT_WITH_HEADER_AND_FOOTER_MOBILE,
  SCREEN_HEIGHT_WITH_HEADER_AND_FOOTER_DESKTOP,
} from '@/constants';

// Components
import { Footer } from '@/ui/shared/Footer';

// Utils
import { cn } from '@/utils';

const Layout = ({ children }: { children: ReactNode }) => (
  <div>
    <div
      className={cn(
        'flex flex-col',
        SCREEN_HEIGHT_WITH_HEADER_AND_FOOTER_MOBILE,
        SCREEN_HEIGHT_WITH_HEADER_AND_FOOTER_DESKTOP,
      )}
    >
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
