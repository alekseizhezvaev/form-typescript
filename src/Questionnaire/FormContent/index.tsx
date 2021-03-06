import React, { useCallback } from 'react';

import { useFormikContext } from 'formik';
import { scrollToTop } from 'src/helpers/scrollToTop';

import { FieldCheckbox } from '../../formikControls/FieldCheckbox';
import { FieldInput } from '../../formikControls/FieldInput';
import { FieldRadio } from '../../formikControls/FieldRadio';
import { FieldUpload } from '../../formikControls/FieldUpload';
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

  const handleClickPrivacy = useCallback(() => {
    scrollToTop();
    modalHandler.onOpenModal();
  }, [modalHandler]);

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

        <FieldUpload<QuestionnarieFormType> name="portfolio" />
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
        <div className={styles.FormContent__formItem__items}>
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
        </div>
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
          <span className={styles.FormContent__privacy__button} onClick={handleClickPrivacy}>
            политикой конфиденциальности
          </span>
        </div>
      </div>

      <Button
        isDisabled={!checkIsValid(values) || isSubmitting}
        isLoading={isSubmitting}
        type="submit"
      >
        Отправить
      </Button>

      <PrivacyModal onCloseModal={modalHandler.onCloseModal} isOpen={modalFlag} />
    </div>
  );
};
