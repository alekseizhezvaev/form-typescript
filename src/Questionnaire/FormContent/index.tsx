import React from 'react';

import { useFormikContext } from 'formik';

import { FieldCheckbox } from '../../formikControls/FieldCheckbox';
import { FieldInput } from '../../formikControls/FieldInput';
import { FieldRadio } from '../../formikControls/FieldRadio';
import { useModal } from '../../hooks/useModal';
import { Button } from '../../uikit/Button';
import { FormItem } from '../../uikit/FormItem';
import { checkIsValid } from '../validate';
import { QuestionnarieFormType } from '../QuestionnarieFormType';

import styles from './styles/FormContent.module.scss';
import { PrivacyModal } from './PrivacyModal';

export const FormContent: React.FC = () => {
  const { values, isSubmitting } = useFormikContext<QuestionnarieFormType>();
  const [modalFlag, modalHandler] = useModal(false);

  return (
    <div className={styles.FormContent}>
      <div className={styles.FormContent__title}>Анкета соискателя</div>

      <FormItem title="Личные данные">
        <FieldInput<QuestionnarieFormType>
          label="Имя *"
          name="firstName"
          placeholder="Имя"
          type="text"
        />
        <FieldInput<QuestionnarieFormType>
          label="Фамилия *"
          name="lastName"
          placeholder="Фамилия"
          type="text"
        />

        <FieldInput<QuestionnarieFormType>
          label="Электронная почта *"
          name="email"
          placeholder="Электронная почта"
          type="text"
        />
      </FormItem>

      <FormItem
        title={
          /** @Warn как указано в макете, эта ошибка указывается сразу при инициализации формы (начальное значение - не выбрано) */
          <div>
            Пол *{' '}
            {!values.gender ? (
              <span className={styles.FormContent__formItem__error}>укажите пол</span>
            ) : null}
          </div>
        }
      >
        <FieldRadio<QuestionnarieFormType, QuestionnarieFormType['gender']>
          label="Мужской"
          name="gender"
          value="male"
        />
        <FieldRadio<QuestionnarieFormType, QuestionnarieFormType['gender']>
          label="Женский"
          name="gender"
          value="female"
        />
      </FormItem>

      <FormItem title="Github">
        <FieldInput<QuestionnarieFormType>
          label="Вставьте ссылку на Github"
          name="github"
          placeholder="https//Github.com/Егорcrick"
          type="text"
        />
      </FormItem>

      <div className={styles.FormContent__privacy}>
        <FieldCheckbox<QuestionnarieFormType> name="isPrivacyPolicy" />

        <div>
          * Я согласен с{' '}
          <span className={styles.FormContent__privacy__button} onClick={modalHandler.onOpenModal}>
            политикой конфиденциальности
          </span>
        </div>
      </div>

      <Button isDisabled={!checkIsValid(values)} isLoading={isSubmitting} type="submit">
        Отправить
      </Button>

      {modalFlag ? <PrivacyModal onCloseModal={modalHandler.onCloseModal} /> : null}
    </div>
  );
};
