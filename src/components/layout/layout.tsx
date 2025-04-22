import { Outlet } from 'react-router-dom';
import { Navbar } from '@components/ui';

import styles from './layout.module.scss';

export function Layout() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles['layout__main']}>
        <Outlet />
      </main>
    </div>
  )
}
