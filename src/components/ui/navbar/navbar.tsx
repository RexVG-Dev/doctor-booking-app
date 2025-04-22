import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'

import { VARIANTS } from '@types';
import { ThemeToggle } from '../themeToggle';
import { RoundButton } from '../roundButton';
import { Links } from './links';

import styles from './navbar.module.scss';

const prefix = 'navbar';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles[`${prefix}__container`]}>
        <h1 className={styles[`${prefix}__page-title`]}>Doctor Booking</h1>
        
        <div className={styles[`${prefix}__desktop`]}>
          <div className={styles[`${prefix}__links`]}>
            <Links setIsOpen={setIsOpen} />
            <ThemeToggle />
          </div>
        </div>

        <div className={styles[`${prefix}__mobile-toggle`]}>
          <ThemeToggle />
          <RoundButton
            variant={VARIANTS.GHOST}
            aria-label='Toggle Navigation Menu'
            className={styles[`${prefix}__menu-button`]}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <FiX aria-hidden="true"/> : <FiMenu aria-hidden="true"/>}
          </RoundButton>
        </div>
      </div>

      {isOpen && (
        <div className={styles[`${prefix}__mobile-menu`]}>
          <Links setIsOpen={setIsOpen} />
        </div>
      )}
    </nav>
  )
}