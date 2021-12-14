import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/customForm.json';

const initialValues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {};

for (let input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;
  
  let schema = Yup.string();

  for (let rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required(rule.message || 'Required');
    }

    if (rule.type === 'minLength') {
      const minCharLength = (rule as any).value || 2
      const msg = rule.message || `Must be at least ${minCharLength} characters`
      schema = schema.min(minCharLength, msg);
    }

    if (rule.type === 'email') {
      schema = schema.email(rule.message || 'Invalid email');
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}>
        {(formik) => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (['input', 'email', 'password'].includes(type)) {
                return (
                  <MyTextInput
                    key={name}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              }

              if (type === 'select') {
                const defaultOption = [{ value: '', label: 'Select a game' }];
                return (
                  <MySelect
                    key={name}
                    name={name}
                    label={label}
                    options={defaultOption.concat(
                      options?.map((o) => ({
                        value: o.id,
                        label: o.name,
                      })) as any
                    )}
                  />
                );
              }

              return <span>type: "{type}" no soportado</span>;
            })}
            <button type='submit'>Submit!</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
