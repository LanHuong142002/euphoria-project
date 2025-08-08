import { useTheme } from 'next-themes';

/**
 * A hook to change the theme of the app.
 *
 * @returns {Object} An object with three functions to change the theme to light, dark, and system.
 *                   It also returns the current theme.
 */
export const useChangeTheme = () => {
  const { setTheme, theme } = useTheme();

  const onThemeLight = () => {
    setTheme('light');
  };

  const onThemeDark = () => {
    setTheme('dark');
  };

  const onThemeSystem = () => {
    setTheme('system');
  };

  return {
    onThemeLight,
    onThemeDark,
    onThemeSystem,
    theme,
  };
};
