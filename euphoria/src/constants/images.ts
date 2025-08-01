export const FAVICON_URL = '/favicon.ico';

export const LOGO_URL = (isDarkMode: boolean) =>
  isDarkMode ? IMAGES.LOGO_DARK : IMAGES.LOGO;

export const IMAGES = {
  MOCK_PRODUCT_IMAGE:
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
  PREVIEW: process.env.NEXT_PUBLIC_PREVIEW_IMAGE,
  ONBOARDING: '/images/onboarding.webp',
  NOT_FOUND: '/images/not-found.png',
  FALLBACK_URL: '/images/default-fallback.webp',
  LOGO: '/images/logo.png',
  LOGO_DARK: '/images/logo-dark.png',
};

export const IMAGE_DETAILS = {
  ONBOARDING: {
    src: IMAGES.ONBOARDING,
    alt: 'Three confident women expressing joyful summer vibes.',
  },
  NOT_FOUND: {
    src: IMAGES.NOT_FOUND,
    alt: 'A 404 error page',
  },
};
