export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
} as const;

export type ThemeType = (typeof THEMES)[keyof typeof THEMES];

/**
 * Todo: Add mora data for location like coords
 */
export type DoctorType = {
  id: string;
  name: string;
  specialty: string,
  rating: number
  availability: string[],
  location: string,
  photo: string,
};

export type AppointmentType = {
  doctor: DoctorType,
  time: string,
}

export type FilterType = {
  specialty: string,
  availability: string,
}