import React, { useCallback } from 'react';
import usePortal from 'react-useportal';

import { IconClose } from '../icons/IconClose';
import { Button } from '../Button';

import styles from './styles/Modal.module.scss';

type Props = {
  actionButtonText: string;
  onCloseModal: VoidFunction;
  onActionClick?: VoidFunction;
  title: string;
};

export const Modal: React.FC<Props> = ({
  onCloseModal,
  children,
  title,
  actionButtonText,
  onActionClick,
}) => {
  const { Portal } = usePortal();

  const handleClick = useCallback(() => {
    onCloseModal();

    if (onActionClick) {
      onActionClick();
    }
  }, [onActionClick, onCloseModal]);

  return (
    <Portal>
      <div>
        <div className={styles.Modal__overlay} />

        <div className={styles.Modal__container}>
          <div className={styles.Modal__content}>
            <button className={styles.Modal__content__close} onClick={onCloseModal} type="button">
              <IconClose />
            </button>
            <div className={styles.Modal__content__title}>{title}</div>
            <div className={styles.Modal__content__main}>{children}</div>
            <Button onClick={handleClick}>{actionButtonText}</Button>
          </div>
        </div>
      </div>
    </Portal>
  );
};
