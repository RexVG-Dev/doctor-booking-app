import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import { SIZES, SizeType, VARIANTS, VariantType } from '@types';

import styles from './button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: SizeType;
  variant?: VariantType
  children: ReactNode;
  loading?: boolean;
  'aria-label'?: string;
};

const prefix = 'button';

export function Button({
  children,
  size = SIZES.MD,
  variant = VARIANTS.PRIMARY,
  loading = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[`${prefix}--${size}`],
        styles[`${prefix}--${variant}`],
        {
          [styles[`${prefix}--loading`]]: loading,
        },
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className={styles[`${prefix}__loading`]}>
          <div data-testid="loading-spinner" className={styles['loading-spinner']}></div>
        </span>
      ) : (
        children
      )}
    </button>
  );
}
