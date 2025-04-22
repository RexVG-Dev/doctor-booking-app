import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import styles from './navbar.module.scss';

const prefix = 'navbar';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/doctors', label: 'Doctors' },
  { path: '/appointments', label: 'My Appointments' },
];

type LinksType = {
  setIsOpen: (isOpen: boolean) => void;
}

export function Links({setIsOpen}: LinksType) {
  return navItems.map(({ path, label})=> (
    <NavLink
      key={path}
      to={path}
      className={({ isActive}) => clsx(
        styles[`${prefix}__link`], {
          [styles[`${prefix}__link--active`]]: isActive,
        }
      )}
      onClick={() => setIsOpen(false)}
    >
      {label}
    </NavLink>
  ));
}