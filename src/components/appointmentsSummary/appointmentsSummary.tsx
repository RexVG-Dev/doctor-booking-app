import clsx from 'clsx';

import useDoctorStore from '@store/doctore.store';
import { Button } from '@components/ui';

import styles from './appointmentsSummary.module.scss';
import { SIZES } from '@types';

const prefix = 'appointments-summary';

export const AppointmentsSummary = () => {
  const { appointments, cancelAppointment } = useDoctorStore();

  if (appointments.length === 0) {
    return <p className={clsx(styles[`${prefix}__empty`])}>No appointments booked yet.</p>;
  }

  return (
    <div className={clsx(styles[prefix])}>
      <ul className={clsx(styles[`${prefix}__list`])}>
        {appointments.map((appt, index) => (
          <li key={index} className={clsx(styles[`${prefix}__card`])}>
            <img
              src={appt.doctor.photo}
              alt={appt.doctor.name}
              className={clsx(styles[`${prefix}__photo`])}
            />
            <div className={clsx(styles[`${prefix}__details`])}>
              <p><strong>{appt.doctor.name}</strong></p>
              <p>{appt.doctor.specialty}</p>
              <p>{appt.doctor.location}</p>
              <p><span role="img" aria-label="time icon">⏰</span> {appt.time}</p>
            </div>
            <div className={clsx(styles[`${prefix}__actions`])}>
              <Button
                variant="danger"
                size={SIZES.SM}
                onClick={() => cancelAppointment(index)}
                aria-label={`Cancel appointment with ${appt.doctor.name}`}
              >
                Cancel
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
