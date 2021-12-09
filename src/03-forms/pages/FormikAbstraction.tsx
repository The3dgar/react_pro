import '../styles/styles.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextInput } from '../components';

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik FormikAbstraction Tutorial</h1>

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
            .oneOf(['dev', 'desg', 'com'], 'Select a job type')
            .required('Required'),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label='First Name'
              name='firstName'
              placeholder='John'
            />
            <MyTextInput label='Last Name' name='lastName' placeholder='Dou' />
            <MyTextInput
              label='Email'
              name='email'
              type='email'
              placeholder='john@gmail.com'
            />

            <MySelect
              label='Job Type'
              name='jobType'
              options={[
                { value: 'dev', label: 'Developer' },
                { value: 'desg', label: 'Designer' },
                { value: 'com', label: 'Communicator' },
              ]}
            ></MySelect>

            <MyCheckbox label='Termns and conditions' name='terms' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
