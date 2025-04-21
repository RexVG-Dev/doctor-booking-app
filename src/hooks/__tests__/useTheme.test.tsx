import { render, fireEvent, screen } from '@testing-library/react';

import useTheme from '@hooks/useTheme';
import { THEMES } from '@types';

const TestComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p data-testid="theme">{theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('should toggle the theme from light to dark', () => {
    render(<TestComponent />);

    expect(screen.getByTestId('theme').textContent).toBe(THEMES.LIGHT);
    expect(document.documentElement.getAttribute('data-theme')).toBe(THEMES.LIGHT);

    fireEvent.click(screen.getByText('Toggle Theme'));

    expect(screen.getByTestId('theme').textContent).toBe(THEMES.DARK);
    expect(localStorage.getItem('theme')).toBe(THEMES.DARK);
    expect(document.documentElement.getAttribute('data-theme')).toBe(THEMES.DARK);
  });
});