import React, { ButtonHTMLAttributes } from 'react';

import cn from 'classnames';

import styles from './styles/Button.module.scss';

type Props = {
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

export const Button: React.FC<Props> = ({
  isDisabled,
  isLoading,
  type = 'button',
  children,
  onClick,
}) => {
  return (
    <button
      className={cn(styles.Button, {
        [styles.Button_disabled]: isDisabled,
        [styles.Button_active]: !isDisabled,
      })}
      disabled={isDisabled}
      onClick={onClick}
      type={type}
    >
      {isLoading ? 'Загрузка...' : children}
    </button>
  );
};
