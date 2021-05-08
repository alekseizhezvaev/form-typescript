import React, { useCallback, useEffect, useRef } from 'react';
import usePortal from 'react-useportal';

import cn from 'classnames';

import { useDelayUnmount } from '../../hooks/useDelayUnmount';
import { IconClose } from '../icons/IconClose';
import { Button } from '../Button';

import styles from './styles/Modal.module.scss';

type Props = {
  actionButtonText: string;
  hasCloseButton?: boolean;
  onCloseModal: VoidFunction;
  onActionClick?: VoidFunction;
  title: string;
  isOpen: boolean;
};

export const Modal: React.FC<Props> = ({
  onCloseModal,
  children,
  title,
  actionButtonText,
  onActionClick,
  hasCloseButton,
  isOpen,
}) => {
  const { Portal } = usePortal();
  const shouldRenderContent = useDelayUnmount(isOpen, 250);
  const titleRef = useRef(title);

  const handleClick = useCallback(() => {
    onCloseModal();

    if (onActionClick) {
      onActionClick();
    }
  }, [onActionClick, onCloseModal]);

  useEffect(() => {
    if (isOpen) {
      titleRef.current = title;
    }
  }, [isOpen, title]);

  return (
    <Portal>
      {shouldRenderContent && (
        <div
          className={cn(styles.Button, {
            [styles.Modal_mount]: isOpen,
            [styles.Modal_unmount]: !isOpen,
          })}
        >
          <div className={styles.Modal__overlay} />

          <div className={styles.Modal__container}>
            <div className={styles.Modal__content}>
              {hasCloseButton ? (
                <button
                  className={styles.Modal__content__close}
                  onClick={onCloseModal}
                  type="button"
                >
                  <IconClose />
                </button>
              ) : null}

              <div className={styles.Modal__content__title}>{titleRef.current}</div>
              <div className={styles.Modal__content__main}>{children}</div>
              <Button onClick={handleClick}>{actionButtonText}</Button>
            </div>
          </div>
        </div>
      )}
    </Portal>
  );
};
