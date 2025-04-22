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

export const SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

export type SizeType = (typeof SIZES)[keyof typeof SIZES];

export const VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DANGER: 'danger',
  GHOST: 'ghost',
  OUTLINE: 'outline',
} as const;

export type VariantType = (typeof VARIANTS)[keyof typeof VARIANTS];
