import { render, screen, fireEvent } from '@testing-library/react';

import { RoundButton } from './roundButton';
import { SIZES, VARIANTS } from '@types';

describe('RoundButton', () => {
  it('should render with the correct children', () => {
    // arrange
    render(<RoundButton>Click Me</RoundButton>);

    // assert
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('should have the correct size class based on the "size" prop', () => {
    // arrange
    render(<RoundButton size={SIZES.SM}>Small Button</RoundButton>);
    
    // assert
    expect(screen.getByText('Small Button')).toHaveClass('round-button--sm');
  });

  it('should have the correct variant class based on the "variant" prop', () => {
    // arrange
    render(<RoundButton variant={VARIANTS.SECONDARY}>Secondary Button</RoundButton>);

    // assert
    expect(screen.getByText('Secondary Button')).toHaveClass('round-button--secondary');
  });

  it('should be disabled when "disabled" prop is passed', () => {
    // arrange
    render(<RoundButton disabled>Disabled Button</RoundButton>);

    // assert
    const button = screen.getByText('Disabled Button');
    expect(button).toBeDisabled();
  });

  it('should have the correct aria-label when "aria-label" prop is passed', () => {
    // arrange
    render(<RoundButton aria-label="Submit Form">Submit</RoundButton>);

    // assert
    expect(screen.getByLabelText('Submit Form')).toBeInTheDocument();
  });

  it('should handle click events correctly', () => {
    // arrange
    const onClickMock = jest.fn();
    render(<RoundButton onClick={onClickMock}>Click Me</RoundButton>);
    
    // act
    fireEvent.click(screen.getByText('Click Me'));
    
    // assert
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
