import { FaStar, FaCalendarAlt } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import clsx from 'clsx';

import { DoctorType, SIZES } from '@types';

import styles from './doctorCard.module.scss';
import { Button } from '@components/ui';

type DoctorCardProps = {
  doctor: DoctorType;
  onBook: (doctor: DoctorType) => void;
  className?: string;
};

const prefix = 'card';

export const DoctorCard = ({ doctor, onBook, className }: DoctorCardProps) => {

  return (
    <article
      className={clsx(
        styles[`${prefix}`],
        className
      )}
      role="region"
      aria-label={`Doctor card for ${doctor.name}`}
    >
      <div className={clsx(styles[`${prefix}__header`])}>
        <img
          src={doctor.photo}
          alt={`Portrait of Dr. ${doctor.name}`}
          className={clsx(styles[`${prefix}__image`])}
        />
        <div>
          <h2 className={clsx(styles[`${prefix}__name`])}>{doctor.name}</h2>
          <p className={clsx(styles[`${prefix}__specialty`])}>{doctor.specialty}</p>
          <div className={clsx(styles[`${prefix}__rating`])}>
            <FaStar />
            <span>{doctor.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <div className={clsx(styles[`${prefix}__details`])}>
        <p>
          <FaLocationDot/>
          <strong>Location:</strong> {doctor.location}
        </p>
        <p>
          <FaCalendarAlt/>
          <strong>Available:</strong> {doctor.availability.join(', ')}
        </p>
      </div>

      <Button
        size={SIZES.MD}
        className={clsx(styles[`${prefix}__button`])}
        onClick={() => onBook(doctor)}
        aria-label={`Book appointment with Dr. ${doctor.name}`}
      >
        Book Appointment
      </Button>
    </article>
  );
};
