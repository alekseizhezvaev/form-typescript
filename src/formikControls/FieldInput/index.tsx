import React from 'react';

import { useField } from 'formik';

import { Input, InputProps } from '../../uikit/Input';

type Props<T extends Record<string, unknown>> = {
  label: string;
  name: keyof T;
} & Pick<InputProps, 'type' | 'placeholder'>;

export const FieldInput = <T extends Record<string, unknown>>({
  label,
  placeholder,
  name,
  type,
}: Props<T>) => {
  const NAME = name as string;
  const [field, meta] = useField<string>(NAME);
  const isError = Boolean(meta.touched && meta.error);

  return (
    <Input
      {...field}
      errorMessage={meta.error}
      isError={isError}
      placeholder={placeholder}
      label={label}
      name={NAME}
      type={type}
    />
  );
};
