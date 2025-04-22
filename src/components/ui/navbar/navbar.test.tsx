import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from './navbar';

jest.mock('./links', () => ({
  Links: ({ setIsOpen }: any) => (
    <div data-testid="links" onClick={() => setIsOpen(false)}>Links Component</div>
  )
}));

jest.mock('../themeToggle', () => ({
  ThemeToggle: () => <div data-testid="theme-toggle">ThemeToggle</div>
}));

describe('Navbar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the page title', () => {
    // arrange
    render(<Navbar />);

    // assert
    expect(screen.getByText('Doctor Booking')).toBeInTheDocument();
  });

  it('should render ThemeToggle and Links components', () => {
    // arrange
    render(<Navbar />);

    // assert
    expect(screen.getAllByTestId('theme-toggle')).toHaveLength(2); // One in desktop, one in mobile
    expect(screen.getByTestId('links')).toBeInTheDocument();
  });

  it('should toggle the mobile menu when menu button is clicked', () => {
    // arrange
    render(<Navbar />);
    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });

    // assert (initial state)
    expect(screen.queryByText('Links Component')).toBeInTheDocument(); // Desktop only

    // act
    fireEvent.click(toggleButton);

    // assert (after opening menu)
    expect(screen.getAllByText('Links Component')).toHaveLength(2); // Desktop + Mobile

    // act
    fireEvent.click(toggleButton);

    // assert (after closing menu)
    expect(screen.getAllByText('Links Component')).toHaveLength(1); // Only Desktop
  });
});
