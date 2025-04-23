import { render, screen, fireEvent } from '@testing-library/react';
import { DoctorCard } from './doctorCard';

const mockDoctor = {
  id: '1',
  name: 'Dr. Jane Doe',
  specialty: 'Cardiology',
  rating: 4.7,
  photo: 'https://example.com/photo.jpg',
  location: 'New York',
  availability: ['Monday', 'Wednesday'],
};

describe('DoctorCard', () => {
  it('should render doctor name, specialty, and rating', () => {
    // arrange
    render(<DoctorCard doctor={mockDoctor} onBook={jest.fn()} />);

    // assert
    expect(screen.getByText('Dr. Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('Cardiology')).toBeInTheDocument();
    expect(screen.getByText('4.7')).toBeInTheDocument();
  });

  it('should render the doctor image with correct alt text', () => {
    // arrange
    render(<DoctorCard doctor={mockDoctor} onBook={jest.fn()} />);

    // assert
    const img = screen.getByAltText('Portrait of Dr. Dr. Jane Doe');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', mockDoctor.photo);
  });

  it('should render the location and availability', () => {
    // arrange
    render(<DoctorCard doctor={mockDoctor} onBook={jest.fn()} />);

    // assert
    expect(screen.getByText(/Location:/)).toBeInTheDocument();
    expect(screen.getByText(/New York/)).toBeInTheDocument();
    expect(screen.getByText(/Available:/)).toBeInTheDocument();
    expect(screen.getByText(/Monday, Wednesday/)).toBeInTheDocument();
  });

  it('should render the Book Appointment button with correct label', () => {
    // arrange
    render(<DoctorCard doctor={mockDoctor} onBook={jest.fn()} />);

    // assert
    const button = screen.getByRole('button', {
      name: `Book appointment with Dr. ${mockDoctor.name}`,
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Book Appointment');
  });

  it('should call onBook when the button is clicked', () => {
    // arrange
    const onBookMock = jest.fn();
    render(<DoctorCard doctor={mockDoctor} onBook={onBookMock} />);

    // act
    const button = screen.getByRole('button', {
      name: `Book appointment with Dr. ${mockDoctor.name}`,
    });
    fireEvent.click(button);

    // assert
    expect(onBookMock).toHaveBeenCalledTimes(1);
    expect(onBookMock).toHaveBeenCalledWith(mockDoctor);
  });

  it('should have role="region" and correct aria-label', () => {
    // arrange
    render(<DoctorCard doctor={mockDoctor} onBook={jest.fn()} />);

    // assert
    const region = screen.getByRole('region', {
      name: `Doctor card for ${mockDoctor.name}`,
    });
    expect(region).toBeInTheDocument();
  });
});
