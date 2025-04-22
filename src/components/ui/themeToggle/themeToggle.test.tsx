import { render, fireEvent, screen } from '@testing-library/react';

import { ThemeToggle } from './themeToggle';
import { THEMES } from '@types';


describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.setAttribute('data-theme', THEMES.LIGHT);
  });

  it('should render with light icon initially', () => {
    // arrange
    render(<ThemeToggle />);

    // assert
    expect(screen.getByRole('button')).toHaveTextContent('🌙');
    expect(document.documentElement.getAttribute('data-theme')).toBe(THEMES.LIGHT);
  });

  it('should toggle theme on click', () => {
    // arrange
    render(<ThemeToggle />);

    // act
    const button = screen.getByRole('button');
    fireEvent.click(button);

    // assert
    expect(button).toHaveTextContent('☀️');
    expect(localStorage.getItem('theme')).toBe(THEMES.DARK);
    expect(document.documentElement.getAttribute('data-theme')).toBe(THEMES.DARK);
  });
});