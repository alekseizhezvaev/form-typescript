import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import * as FileSaver from 'file-saver';

import { IconPlus } from '../icons/IconPlus';

import styles from './styles/UploadButton.module.scss';
import { UploadItem } from './UploadItem';

const MAX_SIZE = 16 * 1024 * 1024;

type Props = {
  onChange: (file: File | null) => void;
  onBlur: VoidFunction;
  value: File | null;
};

export const UploadButton: React.FC<Props> = ({ onBlur, onChange, value }) => {
  const [isError, setIsError] = useState(false);
  const [draftFileName, setDraftFileName] = useState('');

  const onDrop = useCallback(
    (acceptedFiles) => {
      onChange(acceptedFiles[0] || null);
    },
    [onChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize: MAX_SIZE,
    validator: (file: File) => {
      if (file.size > MAX_SIZE) {
        setDraftFileName(file.name);
        setIsError(true);
      } else {
        setDraftFileName('');
        setIsError(false);
      }

      return null;
    },
  });

  const handleDelete = useCallback(() => {
    if (isError) {
      setDraftFileName('');
      setIsError(false);
    } else {
      onChange(null);
    }
  }, [isError, onChange]);

  const handleDownload = useCallback(() => {
    if (!value) {
      return;
    }
    FileSaver.saveAs(value);
  }, [value]);

  return value ? (
    <UploadItem fileName={value.name} handleDelete={handleDelete} handleDownload={handleDownload} />
  ) : isError ? (
    <UploadItem
      fileName={draftFileName}
      handleDelete={handleDelete}
      handleDownload={handleDownload}
      isError={isError}
    />
  ) : (
    <button {...getRootProps()} className={styles.UploadButton} type="button">
      <input {...getInputProps()} onBlur={onBlur} />
      <div className={styles.UploadButton__icon}>
        <IconPlus />
      </div>
      Загрузить резюме
    </button>
  );
};
