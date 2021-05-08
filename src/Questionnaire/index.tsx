import React from 'react';
import { useCallback } from 'react';

import { Form, Formik, FormikConfig } from 'formik';
import { scrollToTop } from 'src/helpers/scrollToTop';

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
  portfolio: null,
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
      scrollToTop();
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
        <FormModal onCloseModal={modalHandler.onCloseModal} isOpen={modalFlag} />
      </Form>
    </Formik>
  );
};
