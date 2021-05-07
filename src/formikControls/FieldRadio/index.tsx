import React from 'react';

import { useField } from 'formik';

import { Radio } from '../../uikit/Radio';

type Props<T extends Record<string, unknown>, K extends string> = {
  name: keyof T;
  label: string;
  value: K;
};

export const FieldRadio = <T extends Record<string, unknown>, K extends string>({
  name,
  label,
  value,
}: Props<T, K>) => {
  const NAME = name as string;
  const [field] = useField<string>({
    name: NAME,
    type: 'radio',
    value,
  });

  return <Radio {...field} name={NAME} label={label} />;
};
