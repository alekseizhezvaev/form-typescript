import React, { useCallback } from 'react';

import { useField } from 'formik';

import { UploadButton } from '../../uikit/UploadButton';

type Props<T extends Record<string, unknown>> = {
  name: keyof T;
};

export const FieldUpload = <T extends Record<string, unknown>>({ name }: Props<T>) => {
  const [{ value }, , { setValue, setTouched }] = useField<File | null>(name as string);

  const handleChange = useCallback(
    (file: File | null) => {
      setValue(file);
      setTouched(true);
    },
    [setTouched, setValue]
  );

  const handleBlur = useCallback(() => {
    setTouched(true);
  }, [setTouched]);

  return <UploadButton onChange={handleChange} onBlur={handleBlur} value={value} />;
};
