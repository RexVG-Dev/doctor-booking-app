import clsx from 'clsx';

import useDoctorStore from '@store/doctore.store';
import { ALL_VALUE } from '@constants';

import styles from './doctorFilters.module.scss';

const prefix = 'filters';

export const DoctorFilters = () => {
  const { doctors, filters, setFilter } = useDoctorStore();

  const specialties = Array.from(new Set(doctors.map(doc => doc.specialty)));
  const timeSlots = Array.from(
    new Set(doctors.flatMap(doc => doc.availability))
  ).sort();

  return (
    <section className={clsx(styles[prefix])} aria-label="Filter doctors">
      <label className={clsx(styles[`${prefix}__group`])}>
        <span className={styles[`${prefix}__label`]}>Specialty</span>
        <select
          value={filters.specialty}
          onChange={(e) => setFilter('specialty', e.target.value)}
          className={clsx(styles[`${prefix}__select`])}
          aria-label="Filter by specialty"
        >
          <option value={ALL_VALUE}>All</option>
          {specialties.map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>
      </label>

      <label className={clsx(styles[`${prefix}__group`])}>
        <span className={styles[`${prefix}__label`]}>Availability</span>
        <select
          value={filters.availability}
          onChange={(e) => setFilter('availability', e.target.value)}
          className={clsx(styles[`${prefix}__select`])}
          aria-label="Filter by availability"
        >
          <option value={ALL_VALUE}>All</option>
          {timeSlots.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </label>
    </section>
  );
};
