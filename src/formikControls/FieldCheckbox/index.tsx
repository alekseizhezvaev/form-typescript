import React from 'react';

import { useField } from 'formik';

import { Checkbox } from '../../uikit/Checkbox';

type Props<T extends Record<string, unknown>> = {
  name: keyof T;
};

export const FieldCheckbox = <T extends Record<string, unknown>>({ name }: Props<T>) => {
  const [field] = useField<boolean>({
    name: name as string,
    type: 'checkbox',
  });

  return <Checkbox {...field} />;
};
