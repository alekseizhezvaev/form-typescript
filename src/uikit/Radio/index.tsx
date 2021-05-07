import React from 'react';

import styles from './styles/Radio.module.scss';

type Props = {
  label: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'className'>;

export const Radio: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <label className={styles.Radio}>
      <input {...rest} className={styles.Control} type="radio" />
      <div>{label}</div>
    </label>
  );
};
