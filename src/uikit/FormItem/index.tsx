import React from 'react';

import styles from './styles/FormItem.module.scss';

type Props = {
  title: React.ReactNode;
};

export const FormItem: React.FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.FormItem}>
      <div className={styles.FormItem__title}>{title}</div>
      <div className={styles.FormItem__content}>{children}</div>
    </div>
  );
};
