import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'lansutech-theme';

const TRANSITION_DURATION_MS = 100;
const BUFFER_MS = 50;

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    const html = document.documentElement;
    const nextTheme = theme === 'light' ? 'dark' : 'light';


    html.classList.add('theme-transition');

    setTheme(nextTheme);

    const timer = setTimeout(() => {
      html.classList.remove('theme-transition');
    }, TRANSITION_DURATION_MS + BUFFER_MS);

    return () => clearTimeout(timer);
  };

  return { theme, toggleTheme };
};

