import clsx from 'clsx';

import { ALL_VALUE } from '@constants';
import useDoctorStore from '@store/doctore.store';
import { DoctorCard } from "@components/doctorCard";
import { DoctorFilters } from "@components/doctorFilters";

import styles from './doctorsPage.module.scss';
import { DoctorType } from '@types';
import { BookingModal } from '@components/ui/bookingModal';

const prefix = 'doctors-page';

export default function DoctorsPage() {
  const { doctors, filters, selectDoctor } = useDoctorStore();

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSpecialty =
      filters.specialty === ALL_VALUE || doctor.specialty === filters.specialty;
    const matchesAvailability =
      filters.availability === ALL_VALUE || doctor.availability.includes(filters.availability);

    return matchesSpecialty && matchesAvailability;
  });

  const handleBook = (doctor: DoctorType) => {
    selectDoctor(doctor);
  };

  return (
    <div className={clsx(styles[prefix])}>
      <BookingModal/>
      <h2 className="text-2xl font-semibold mb-4">Available Doctors</h2>
      <DoctorFilters />
      <div className={clsx(styles[`${prefix}__grid`])}>
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} onBook={() => handleBook(doctor)}/>
          ))
        ) : (
          <p className={clsx(styles[`${prefix}__empty`])}>
            No doctors found for the selected filters.
          </p>
        )}
      </div>
    </div>
  )
}

