export type QuestionnarieFormType = {
  firstName: string;
  lastName: string;
  email: string;
  gender: 'male' | 'female' | '';
  github?: string;
  isPrivacyPolicy: boolean;
};
