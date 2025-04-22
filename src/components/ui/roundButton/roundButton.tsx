import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './roundButton.module.scss';
import { SIZES, SizeType, VARIANTS, VariantType } from '@types';

type RoundButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: SizeType;
  variant?: VariantType;
  children: ReactNode;
  'aria-label'?: string;
};

const prefix = 'round-button';

export function RoundButton({
  children,
  size = SIZES.MD,
  variant = VARIANTS.PRIMARY,
  className,
  disabled,
  ...props
}: RoundButtonProps) {
  return (
    <button
      className={clsx(
        styles[`${prefix}`],
        styles[`${prefix}--${size}`],
        styles[`${prefix}--${variant}`],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
