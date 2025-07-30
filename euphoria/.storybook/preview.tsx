import type { Preview } from '@storybook/nextjs';
import React from 'react';
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },

    // Set default background for all stories
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#fff',
        },
        {
          name: 'dark',
          value: '#1a1a1a',
        },
      ],
    },
  },

  decorators: [
    (Story, context) => {
      const isDark = context.globals.backgrounds?.value === 'dark';

      // Apply theme class to document root
      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('dark');
        if (isDark) {
          document.documentElement.classList.add('dark');
        }
      }

      return (
        <div className={isDark ? 'dark' : ''}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
