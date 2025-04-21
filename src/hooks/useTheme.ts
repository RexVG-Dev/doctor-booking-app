import { useState, useEffect } from 'react';

import { ThemeType, THEMES } from '@types';

const useTheme = () => {
  const [theme, setTheme] =  useState<ThemeType>(THEMES.LIGHT);

  const applyTheme = (theme: ThemeType) => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  const handleTheme = () => {
    const defaultTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    applyTheme(defaultTheme as ThemeType);
  }


  const toggleTheme = () => {
    const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    applyTheme(newTheme);
  }

  useEffect(() => {
    handleTheme();
  }, [])

  return {
    theme,
    toggleTheme
  }
}

export default useTheme;