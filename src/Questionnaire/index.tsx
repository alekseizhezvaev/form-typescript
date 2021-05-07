import React from 'react';
import { useCallback } from 'react';

import { Form, Formik, FormikConfig } from 'formik';

import { useModal } from '../hooks/useModal';

import { questionnaireFormSchema } from './validate';
import { FormContent } from './FormContent';
import { FormModal } from './FormModal';
import { QuestionnarieFormType } from './QuestionnarieFormType';

const initialValues: QuestionnarieFormType = {
  firstName: '',
  lastName: '',
  email: '',
  gender: '',
  github: '',
  isPrivacyPolicy: false,
};

const fakeApi = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
};

export const Questionnaire: React.FC = () => {
  const [modalFlag, modalHandler] = useModal(false);

  const handleSubmit: FormikConfig<QuestionnarieFormType>['onSubmit'] = useCallback(
    async (values, { setSubmitting }) => {
      console.log(JSON.stringify(values, null, 4));
      setSubmitting(true);
      await fakeApi();
      setSubmitting(false);
      modalHandler.onOpenModal();
    },
    [modalHandler]
  );

  return (
    <Formik<QuestionnarieFormType>
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={questionnaireFormSchema}
    >
      <Form>
        <FormContent />
        {modalFlag ? <FormModal onCloseModal={modalHandler.onCloseModal} /> : null}
      </Form>
    </Formik>
  );
};
