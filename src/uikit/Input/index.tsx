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
    <label className={styles.Input__container}>
      <div>{label}</div>
      <input
        {...rest}
        className={cn(styles.Input, isError ? styles.Input_error : styles.Input_default, className)}
      />
      {isError ? <div className={styles.Input__error__text}>{errorMessage}</div> : null}
    </label>
  );
};
