import React from 'react';

import styles from './styles/Radio.module.scss';

type Props = {
  label: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'className'>;

export const Radio: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <label className={styles.Radio__container}>
      <input {...rest} className={styles.Radio} type="radio" />
      <div>{label}</div>
    </label>
  );
};
