import {create} from 'zustand';
import { ALL_VALUE } from '@constants';
import { AppointmentType, DoctorType, FilterType } from '@types';

type DoctorStoreType = {
  doctors: DoctorType[];
  filters: FilterType;
  selectedDoctor: DoctorType | null;
  selectedTime: string | null;
  appointments: AppointmentType[];

  setDoctors: (doctors: DoctorType[]) => void;
  setFilter: (key: keyof FilterType, value: string) => void;
  selectDoctor: (doctor: DoctorType | null) => void;
  selectTimeSlot: (time: string | null) => void;
  confirmAppointment: () => void;
}

const useDoctorStore = create<DoctorStoreType>((set, get) => ({
  doctors: [],
  filters: {
    specialty: ALL_VALUE,
    availability: ALL_VALUE,
  },
  selectedDoctor: null,
  selectedTime: null,
  appointments: [],

  setDoctors: (doctors) => set({ doctors }),
  setFilter: ( key, value ) => set((state) => ({
    filters: {
      ...state.filters,
      [key]: value,
    },
  })),

  selectDoctor: (doctor) => set({ selectedDoctor: doctor }),
  selectTimeSlot: (time) => set({ selectedTime: time }),

  confirmAppointment:() => {
    const { selectedDoctor, selectedTime, appointments} = get();

    if( !selectedDoctor || !selectedTime ) return;

    const newAppointment: AppointmentType = {
      doctor: selectedDoctor,
      time: selectedTime
    }

    set({
      appointments: [...appointments, newAppointment],
      selectedDoctor: null,
      selectedTime: null,
    })
  },
}));

export default useDoctorStore;
