import '../styles/styles.css';
import { useFormik, FormikErrors } from 'formik';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    }
    if (values.firstName.length > 4) {
      errors.firstName = 'Must be 4 characters or less';
    }
    if (!values.lastName) {
      errors.lastName = 'Required';
    }
    if (values.lastName.length > 4) {
      errors.lastName = 'Must be 4 characters or less';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: async (values) => {
      console.log(values);
    },
    validate,
  });

  const { handleChange, values, handleSubmit, errors, touched, handleBlur} = formik;

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">firstName</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />

        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

        <label htmlFor="lastName">lastName</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
