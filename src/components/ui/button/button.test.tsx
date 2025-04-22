import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from './button';
import { SIZES, VARIANTS } from '@types';

describe('Button', () => {
  it('should render with the correct children', () => {
    // arrange
    render(<Button>Click Me</Button>);

    // assert
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('should have the correct size class based on the "size" prop', () => {
    // arrange
    render(<Button size={SIZES.SM}>Small Button</Button>);
    
    // assert
    expect(screen.getByText('Small Button')).toHaveClass('button--sm');
  });

  it('should have the correct variant class based on the "variant" prop', () => {
    // arrange
    render(<Button variant={VARIANTS.SECONDARY}>Secondary Button</Button>);

    // assert
    expect(screen.getByText('Secondary Button')).toHaveClass('button--secondary');
  });

  it('should be disabled when "disabled" prop is passed', () => {
    // arrange
    render(<Button disabled>Disabled Button</Button>);

    // act
    const button = screen.getByText('Disabled Button');

    // assert
    expect(button).toBeDisabled();
  });
  
  it('should be disabled when "loading" prop is passed', () => {
    // arrange
    render(<Button loading>Loading Button</Button>);

    // act
    const button = screen.getByRole('button');

    // assert
    expect(button).toBeDisabled();
  });

  it('should show a loading spinner when "loading" prop is true', () => {
    // arrange
    render(<Button loading>Click Me</Button>);

    // assert
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    expect(screen.queryByText('Click Me')).not.toBeInTheDocument();
  });

  it('should have the correct aria-label when "aria-label" prop is passed', () => {
    // arrange
    render(<Button aria-label="Submit Form">Submit</Button>);

    // assert
    expect(screen.getByLabelText('Submit Form')).toBeInTheDocument();
  });

  it('should handle click events correctly', () => {
    // arrange
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click Me</Button>);
    
    // act
    fireEvent.click(screen.getByText('Click Me'));
    
    // assert
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should not trigger click event when disabled', () => {
    // arrange
    const onClickMock = jest.fn();
    render(<Button disabled onClick={onClickMock}>Disabled Button</Button>);

    // act
    fireEvent.click(screen.getByText('Disabled Button'));

    // assert
    expect(onClickMock).not.toHaveBeenCalled();
  });
  
  it('should not trigger click event when loading', () => {
    // arrange
    const onClickMock = jest.fn();
    render(<Button loading onClick={onClickMock}>Loading Button</Button>);

    // act
    fireEvent.click(screen.getByRole('button'));

    // assert
    expect(onClickMock).not.toHaveBeenCalled();
  });
});
