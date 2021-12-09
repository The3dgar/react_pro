import '../styles/styles.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: async (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(5, 'Must be 5 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(5, 'Must be 5 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
    }),
  });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">firstName</label>
        <input type="text" {...getFieldProps('firstName')} />

        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">lastName</label>
        <input type="text" {...getFieldProps('lastName')} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">email</label>
        <input type="email" {...getFieldProps('email')} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
