import React from 'react';

import cn from 'classnames';

import { IconClose } from '../../icons/IconClose';
import { IconPaperclip } from '../../icons/IconPaperclip';

import styles from './styles/UploadItem.module.scss';

type PropsUploadItem = {
  handleDownload: VoidFunction;
  fileName: string;
  handleDelete: VoidFunction;
  isError?: boolean;
};

export const UploadItem: React.FC<PropsUploadItem> = ({
  handleDownload,
  fileName,
  handleDelete,
  isError,
}) => {
  return (
    <div className={styles.UploadItem}>
      <div
        className={cn(styles.UploadItem__container, {
          [styles.UploadItem__container_default]: !isError,
        })}
      >
        <button
          className={cn(styles.UploadItem__download, {
            [styles.UploadItem__download_default]: !isError,
            [styles.UploadItem__download_error]: isError,
          })}
          onClick={handleDownload}
          type="button"
        >
          <IconPaperclip />
          <div
            className={cn(styles.UploadItem__name, {
              [styles.UploadItem__name_default]: !isError,
              [styles.UploadItem__name_error]: isError,
            })}
          >
            {fileName}
          </div>
        </button>
        <button
          className={cn(styles.UploadItem__close, {
            [styles.UploadItem__close_default]: !isError,
            [styles.UploadItem__close_error]: isError,
          })}
          onClick={handleDelete}
          type="button"
        >
          <IconClose size={16} />
        </button>
      </div>

      {isError ? (
        <div className={styles.UploadItem__error}>
          загружайте файл размером
          <br /> не более 16 mb
        </div>
      ) : null}
    </div>
  );
};
