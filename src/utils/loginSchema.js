import * as yup from 'yup';
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email.')
    .required('Email is required'),
  password: yup.string().required('Password required.'),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  //   'Password must be at least 8 characters, include uppercase, lowercase, number and special character',
  // ),
});
