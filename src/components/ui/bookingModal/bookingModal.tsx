import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import useDoctorStore from '@store/doctore.store';
import { Button } from '../button';

import styles from './bookingModal.module.scss';
import { RoundButton } from '../roundButton';
import { SIZES, VARIANTS } from '@types';


const prefix = 'booking-modal';

export const BookingModal = () => {
  const {
    selectedDoctor,
    selectedTime,
    selectTimeSlot,
    confirmAppointment,
    selectDoctor,
  } = useDoctorStore();

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => selectDoctor(null);

  const handleConfirm = () => {
    confirmAppointment();
  };

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!selectedDoctor) return null;

  return (
    <div
      className={clsx(styles[`${prefix}`])}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      ref={modalRef}
    >
      <div className={clsx(styles[`${prefix}__content`])}>
        <RoundButton
        variant={VARIANTS.GHOST}
          size={SIZES.SM}
          className={clsx(styles[`${prefix}__close`])}
          onClick={handleClose}
          aria-label="Close modal"
        >
          ×
        </RoundButton>

        <h2 id="booking-title" className={styles[`${prefix}__title`]}>
          Book Appointment with {selectedDoctor.name}
        </h2>

        <img
          src={selectedDoctor.photo}
          alt={selectedDoctor.name}
          className={styles[`${prefix}__photo`]}
        />

        <div className={styles[`${prefix}__times`]}>
          {selectedDoctor.availability.map((time) => (
            <Button
              key={time}
              size={SIZES.SM}
              className={clsx(
                styles[`${prefix}__time`],
                selectedTime === time && styles[`${prefix}__time--selected`]
              )}
              onClick={() => selectTimeSlot(time)}
              aria-pressed={selectedTime === time}
            >
              {time}
            </Button>
          ))}
        </div>

        <Button
          onClick={handleConfirm}
          disabled={!selectedTime}
          aria-label="Confirm appointment"
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};
