import { useTheme } from 'next-themes';

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
