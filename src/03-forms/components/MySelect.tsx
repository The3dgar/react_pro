import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  // comodin
  [x: string]: any;
}

export const MySelect = ({ ...props }: Props) => {
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <select {...field} {...props}>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ErrorMessage name={props.name} component='span' />

      {/* {meta.touched && meta.error && (
      <ErrorMessage name={props.name} component='span' />
      )} */}
    </>
  );
};
