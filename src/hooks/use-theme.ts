import { useEffect } from 'react';
import { useTheme as useSharedTheme } from 'next-themes';

/** Keep the original light/dark API while sharing persistence and system changes. */
export const useTheme = () => {
  const { resolvedTheme, setTheme } = useSharedTheme();
  const theme = resolvedTheme === 'dark' ? 'dark' : 'light';

  useEffect(() => {
    if (!resolvedTheme) return;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#091217' : '#eaf3f3');
  }, [resolvedTheme, theme]);

  return { theme, toggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark') };
};
