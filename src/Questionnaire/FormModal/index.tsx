import React from 'react';

import { useFormikContext } from 'formik';

import { Modal } from '../../uikit/Modal';
import { QuestionnarieFormType } from '../QuestionnarieFormType';

import styles from './styles/FormModal.module.scss';

type Props = {
  onCloseModal: VoidFunction;
};

export const FormModal: React.FC<Props> = ({ onCloseModal }) => {
  const { values, resetForm } = useFormikContext<QuestionnarieFormType>();

  return (
    <Modal
      onCloseModal={onCloseModal}
      actionButtonText="Понятно"
      title={`Спасибо ${values.firstName}!`}
      onActionClick={resetForm}
    >
      <div className={styles.FormModal__content}>Мы скоро свяжемся с вами</div>
    </Modal>
  );
};
