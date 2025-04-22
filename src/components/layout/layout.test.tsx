import { render, screen } from '@testing-library/react';
import { Layout } from './layout';
import { MemoryRouter } from 'react-router-dom';

jest.mock('@components/ui', () => ({
  Navbar: () => <nav data-testid="navbar">Mock Navbar</nav>
}));

jest.mock('react-router-dom', () => {
  const original = jest.requireActual('react-router-dom');
  return {
    ...original,
    Outlet: () => <div data-testid="outlet">Mocked Outlet Content</div>
  };
});

describe('Layout', () => {
  it('should render the Navbar and Outlet content', () => {
    // arrange
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    // assert
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('outlet')).toBeInTheDocument();
    expect(screen.getByTestId('outlet')).toHaveTextContent('Mocked Outlet Content');
  });
});
