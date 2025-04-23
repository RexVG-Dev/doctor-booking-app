import { render, screen, fireEvent, within } from '@testing-library/react';
import useDoctorStore from '@store/doctore.store';
import { ALL_VALUE } from '@constants';

import { DoctorFilters } from './doctorFilters';

jest.mock('@store/doctore.store');
const mockedUseDoctorStore = useDoctorStore as unknown as jest.Mock;

describe('DoctorFilters', () => {
  const mockSetFilter = jest.fn();

  beforeEach(() => {
    mockedUseDoctorStore.mockReturnValue({
      doctors: [
        { specialty: 'Cardiology', availability: ['09:00', '13:00', '15:30'] },
        { specialty: 'Dermatology', availability: ['10:00', '14:00'] },
        { specialty: 'Cardiology', availability: ['11:00'] },
      ],
      filters: {
        specialty: ALL_VALUE,
        availability: ALL_VALUE,
      },
      setFilter: mockSetFilter,
    });
  });

  it('should render specialty filter with available options', () => {
    // arrange
    render(<DoctorFilters />);
    const specialtySelect = screen.getByLabelText(/filter by specialty/i);
    
    expect(specialtySelect).toBeInTheDocument();

    // assert
    expect(specialtySelect).toHaveTextContent('All');
    expect(specialtySelect).toHaveTextContent('Cardiology');
    expect(specialtySelect).toHaveTextContent('Dermatology');
  });

  it('should render availability filter with available options', () => {
    // arrange
    render(<DoctorFilters />);

    // assert
    const availabilitySelect = screen.getByLabelText(/filter by availability/i);
    expect(availabilitySelect).toBeInTheDocument();

    // assert
    expect(availabilitySelect).toHaveTextContent('All');
    expect(availabilitySelect).toHaveTextContent('09:00');
    expect(availabilitySelect).toHaveTextContent('10:00');
    expect(availabilitySelect).toHaveTextContent('11:00');
    expect(availabilitySelect).toHaveTextContent('13:00');
    expect(availabilitySelect).toHaveTextContent('14:00');
    expect(availabilitySelect).toHaveTextContent('15:30');
  });

  it('should call setFilter when selecting a specialty', () => {
    // arrange
    render(<DoctorFilters />);
    const specialtySelect = screen.getByLabelText(/filter by specialty/i);

    // act
    fireEvent.change(specialtySelect, { target: { value: 'Cardiology' } });

    // assert
    expect(mockSetFilter).toHaveBeenCalledWith('specialty', 'Cardiology');
  });

  it('should call setFilter when selecting an availability', () => {
    // arrange
    render(<DoctorFilters />);
    const availabilitySelect = screen.getByLabelText(/filter by availability/i);

    // act
    fireEvent.change(availabilitySelect, { target: { value: '09:00' } });

    // assert
    expect(mockSetFilter).toHaveBeenCalledWith('availability', '09:00');
  });

  it('should sort availability options in ascending order', () => {
    // arrange
    render(<DoctorFilters />);
    const availabilitySelect = screen.getByLabelText(/filter by availability/i);
    const optionElements = within(availabilitySelect).getAllByRole('option');
    const availabilityTimes = optionElements.map(option =>
      option.textContent?.trim()
    );

    // assert
    expect(availabilityTimes).toEqual([
      'All',
      '09:00',
      '10:00',
      '11:00',
      '13:00',
      '14:00',
      '15:30',
    ]);
  });
});
