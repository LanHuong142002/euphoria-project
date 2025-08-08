'use client';

import { Sun, Moon } from 'lucide-react';

// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/components/common/DropdownMenu';
import { Button } from '@/ui/components/common/Button';

// Hooks
import { useChangeTheme } from '@/hooks';

export const ToggleTheme = () => {
  const { onThemeLight, onThemeDark, onThemeSystem, theme } = useChangeTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          color="icon"
          size="icon"
          variant="primary"
          aria-label="Toggle theme menu"
          aria-haspopup="menu"
        >
          <Sun
            className="text-icon-primary size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
            aria-hidden="true"
          />
          <Moon
            className="text-icon-primary absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={onThemeLight}
          isActive={theme === 'light'}
          aria-label="Switch to light theme"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={onThemeDark}
          isActive={theme === 'dark'}
          aria-label="Switch to dark theme"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={onThemeSystem}
          isActive={theme === 'system'}
          aria-label="Use system theme preference"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
