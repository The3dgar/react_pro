import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
import '../styles/styles.css';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>RegisterFormikPage</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('Required')
            .min(2, 'Too Short!')
            .max(15, 'Too Long!'),
          email: Yup.string().email('Invalid email').required('Required'),
          password1: Yup.string()
            .required('Required')
            .min(6, 'Too Short!')
            .max(15, 'Too Long!'),
          password2: Yup.string()
            .required('Required')
            .min(6, 'Too Short!')
            .max(15, 'Too Long!')
            .oneOf([Yup.ref('password1'), null], 'Passwords must match!'),
        })}>

          {
            formik => (<Form>
              <MyTextInput label='Nombre' name='name' placeholder='John' />
              <MyTextInput label='Email' name='email' placeholder='john.doe@gmail.com'/>
              <MyTextInput label='Password' type='password' name='password1' placeholder='*******'/>
              <MyTextInput label='Repeat Password' type='password' name='password2' placeholder='*******'/>


              <button type='submit'>Create</button>
              <button type='button' onClick={formik.handleReset}>Reset values</button>
            </Form>)
          }
      </Formik>

    </div>
  );
};
