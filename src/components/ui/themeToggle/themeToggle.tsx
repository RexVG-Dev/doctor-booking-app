import useTheme from '@hooks/useTheme';
import { THEMES, VARIANTS } from '@types';
import { RoundButton } from '../roundButton';

import styles from './themeToggle.module.scss';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <RoundButton
      variant={VARIANTS.GHOST}
      aria-label={`Change to ${theme === 'light' ? 'dark' : 'light'} theme`}
      onClick={toggleTheme}
      className={styles['theme-toggle']}
    >
      {theme === THEMES.LIGHT ? '🌙' : '☀️'}
    </RoundButton>
  
  );
}