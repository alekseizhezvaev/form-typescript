import React from 'react';

import styles from './styles/Checkbox.module.scss';

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'className' | 'value'> & {
  value: boolean;
};

export const Checkbox: React.FC<Props> = ({ value, ...rest }) => {
  return (
    <label className={styles.Checkbox}>
      <input {...rest} className={styles.Control} value={String(value)} type="checkbox" />
    </label>
  );
};
