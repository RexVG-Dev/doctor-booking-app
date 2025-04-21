import useTheme from '@hooks/useTheme';
import { THEMES } from '@types';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
    onClick={toggleTheme}
    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {theme === THEMES.LIGHT ? '🌙' : '☀️'}
    </button>
  );
}