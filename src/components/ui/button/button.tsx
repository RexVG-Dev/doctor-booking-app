import styles from './button.module.scss';

export const Button = () => {
  return (
    <button className={styles.button}>
      <span className={styles['button__text']}>Click Me</span>
    </button>
  )
}