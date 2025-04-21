import { render, fireEvent, screen } from '@testing-library/react';

import { ThemeToggle } from './themeToggle';
import { THEMES } from '@types';


describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.setAttribute('data-theme', THEMES.LIGHT);
  });

  it('should render with light icon initially', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('button')).toHaveTextContent('🌙');
    expect(document.documentElement.getAttribute('data-theme')).toBe(THEMES.LIGHT);
  });

  it('should toggle theme on click', () => {
    render(<ThemeToggle />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(button).toHaveTextContent('☀️');
    expect(localStorage.getItem('theme')).toBe(THEMES.DARK);
    expect(document.documentElement.getAttribute('data-theme')).toBe(THEMES.DARK);
  });
});