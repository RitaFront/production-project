import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContext';

interface IUseTheme {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): IUseTheme {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
}
