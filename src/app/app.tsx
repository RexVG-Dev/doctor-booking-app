import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Layout } from '@components/layout';
import useDoctorStore from '@store/doctore.store';
import mockDoctors from '@mock/mockDoctors';

import './app.scss';
import { AppointmentsPage, DoctorsPage, WelcomePage } from '@pages';


export function App() {
  const setDoctors = useDoctorStore((state) => state.setDoctors);

  useEffect(() => {
    setDoctors(mockDoctors);
  }, [setDoctors]);

  return (
    <div className='app'>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<WelcomePage/>}/>
          <Route path='/doctors' element={<DoctorsPage/>}/>
          <Route path='/appointments' element={<AppointmentsPage/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
