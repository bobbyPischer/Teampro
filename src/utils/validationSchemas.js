import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  name: Yup.string()
    .max(15, 'must be 15 characters or less')
    .required('required'),
  email: Yup.string().email('Invalid Email Address').required('Required'),

  password: Yup.string().required(),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

export const logInSchema = Yup.object({
  email: Yup.string().email('Invalid Email Address').required('Required'),
  password: Yup.string().min(6).required('Required'),
});
