import React from 'react';

import styles from './styles/Form.module.scss';

type Props = {
  title: React.ReactNode;
};

export const FormItem: React.FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.Form}>
      <div className={styles.Form__title}>{title}</div>
      <div className={styles.Form__content}>{children}</div>
    </div>
  );
};
