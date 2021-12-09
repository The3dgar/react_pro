import { ErrorMessage, Field, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const MyCheckbox = ({ ...props }: Props) => {
  const [field] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label>
        <Field {...field} {...props} type='checkbox' />
        {/* <input type="checkbox" {...field} {...props}/> */}
        {props.label}
      </label>
      <ErrorMessage name={props.name} component='span' />
    </>
  );
};
