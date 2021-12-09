import { ErrorMessage, Field, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  // comodin
  [x: string]: any;
}

export const MyTextInput = ({ ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <Field {...field} {...props} />
      {meta.touched && meta.error && (
        <ErrorMessage name={props.name} component='span' />
      )}
    </>
  );
};
