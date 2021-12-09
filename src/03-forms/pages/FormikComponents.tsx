import '../styles/styles.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components Tutorial</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(5, 'Must be 5 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(5, 'Must be 5 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email').required('Required'),
          terms: Yup.boolean().oneOf([true], 'You must accept the terms'),
          jobType: Yup.string()
            .oneOf(['dev', 'des', 'com'], 'Select a job type')
            .required('Required'),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor='firstName'>firstName</label>
            <Field name='firstName' type='text' />
            <ErrorMessage name='firstName' component='span' />

            <label htmlFor='lastName'>lastName</label>
            <Field name='lastName' type='text' />
            <ErrorMessage name='lastName' component='span' />

            <label htmlFor='email'>email</label>
            <Field name='email' type='email' />
            <ErrorMessage name='email' component='span' />

            <label htmlFor='jobType'>Job Type</label>
            <Field name='jobType' as='select'>
              <option value=''>Pick one</option>
              <option value='dev'>dev</option>
              <option value='des'>designer</option>
              <option value='com'>commercial</option>
            </Field>
            <ErrorMessage name='jobType' component='span' />

            <label>
              <Field name='terms' type='checkbox' />
              Terms and conditions
            </label>
            <ErrorMessage name='terms' component='span' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
