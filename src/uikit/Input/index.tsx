import React from 'react';

import cn from 'classnames';

import styles from './styles/Input.module.scss';

export type InputProps = {
  label: string;
  errorMessage: string | undefined;
  isError?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({
  label,
  className,
  errorMessage,
  isError,
  ...rest
}) => {
  return (
    <label className={styles.Input}>
      <div>{label}</div>
      <input
        {...rest}
        className={cn(styles.Control, isError ? styles.Error : styles.Default, className)}
      />
      {isError ? <div className={styles.Text__error}>{errorMessage}</div> : null}
    </label>
  );
};
