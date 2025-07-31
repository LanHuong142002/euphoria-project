import type { Metadata } from 'next';

// Styles
import './globals.css';
import localFont from 'next/font/local';

// Constants
import { BRAND, BASE_URL, FAVICON_URL, IMAGES } from '@/constants';

// Components
import { Providers } from './providers';

// Local Fonts
const coreSansC = localFont({
  src: [
    {
      path: '../../public/fonts/Core-Sans-C-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Core-Sans-C-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Core-Sans-C-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-core-sans-c',
  display: 'swap',
});

const causten = localFont({
  src: [
    {
      path: '../../public/fonts/Causten-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Causten-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Causten-Light.otf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-causten',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || ''),
  title: BRAND.name,
  description: BRAND.description,
  openGraph: {
    title: BRAND.name,
    description: BRAND.description,
    url: BASE_URL || '',
    siteName: BRAND.name,
    images: [
      {
        url: IMAGES.PREVIEW || '',
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: FAVICON_URL,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`
            ${coreSansC.variable}
            ${causten.variable}
            antialiased
          `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
