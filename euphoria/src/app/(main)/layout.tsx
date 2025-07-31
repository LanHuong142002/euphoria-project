import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="w-full h-full">{children}</div>
);

export default Layout;
