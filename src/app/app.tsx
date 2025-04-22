import { useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import useDoctorStore from '@store/doctore.store';
import mockDoctors from '@mock/mockDoctors';
import { Button, ThemeToggle } from '@components/ui';

import './app.scss';

export function App() {
  const setDoctors = useDoctorStore((state) => state.setDoctors);

  useEffect(() => {
    setDoctors(mockDoctors);
  }, [setDoctors]);

  return (
    <div className='app'>

    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      Contenido adaptado al tema
    </div>

      <div>
        <ThemeToggle />
        <Button />
      </div>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
