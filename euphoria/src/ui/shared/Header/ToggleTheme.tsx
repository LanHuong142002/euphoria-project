'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/components/common/DropdownMenu';
import { Button } from '@/ui/components/common/Button';

export const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();

  const handleThemeLight = () => {
    setTheme('light');
  };

  const handleThemeDark = () => {
    setTheme('dark');
  };

  const handleThemeSystem = () => {
    setTheme('system');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button color="icon" size="icon" variant="primary">
          <Sun className="text-icon-primary size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="text-icon-primary absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={handleThemeLight}
          isActive={theme === 'light'}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleThemeDark} isActive={theme === 'dark'}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleThemeSystem}
          isActive={theme === 'system'}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
