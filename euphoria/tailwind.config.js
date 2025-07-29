// @ts-check
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/ui/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
    './src/**/*.stories.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'core-sans-c': ['var(--font-core-sans-c)', 'sans-serif'],
        causten: ['var(--font-causten)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
