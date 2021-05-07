import * as Yup from 'yup';

import { QuestionnarieFormType } from './QuestionnarieFormType';

export const questionnaireFormSchema = Yup.object().shape<QuestionnarieFormType>({
  firstName: Yup.string()
    .required('Пожалуйста укажите имя')
    .matches(/^[a-zA-ZА-Яа-я ]+$/, 'В имени могут быть только буквы'),
  lastName: Yup.string()
    .required('Пожалуйста укажите фамилию')
    .matches(/^[a-zA-ZА-Яа-я ]+$/, 'В фамилии могут быть только буквы'),
  email: Yup.string()
    .required('Пожалуйста укажите электронную почту')
    .email('Пожалуйста укажите электронную почту'),
  github: Yup.string().url('Проверьте правильность ссылки'),
  gender: Yup.mixed()
    .oneOf(['male', 'female'] as const, 'укажите пол')
    .required('укажите пол'),
  isPrivacyPolicy: Yup.boolean().required('Обязательное поле'),
});

const requiredSchema = Yup.object().shape<QuestionnarieFormType>({
  firstName: Yup.string().required('Пожалуйста укажите имя'),
  lastName: Yup.string().required('Пожалуйста укажите фамилию'),
  email: Yup.string().required('Пожалуйста укажите электронную почту'),
  gender: Yup.mixed()
    .oneOf(['male', 'female'] as const, 'укажите пол')
    .required('укажите пол'),
  isPrivacyPolicy: Yup.mixed().oneOf([true], 'Обязательное поле').required('Обязательное поле'),
});

export const checkIsValid = (values: QuestionnarieFormType): boolean => {
  return requiredSchema.isValidSync(values);
};
