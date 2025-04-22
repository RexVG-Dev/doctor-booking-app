import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    // arrange
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // assert
    expect(baseElement).toBeTruthy();
  });
});
