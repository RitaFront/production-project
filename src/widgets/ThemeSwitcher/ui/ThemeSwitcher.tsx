import { Theme, useTheme } from 'app/providers/ThemeProvider';
import React from 'react';
import styles from './themeSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import LigthIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames(styles.themeSwitcher, {}, [className])}
    >
      {theme === Theme.DARK ? <LigthIcon /> : <DarkIcon />}
    </Button>
  );
};
