import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

const initialData = {
  name: '',
  email: '',
  password1: '',
  password2: '',
};

export const RegisterPage = () => {
  const registerUser = async (data: any) => {
    console.log(data);
  };

  const { formData, onChange, onSubmit, resetForm, isValidEmail } = useForm(
    initialData,
    registerUser
  );
  const { email, name, password1, password2 } = formData;

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={name}
          type="text"
          placeholder="name"
          name="name"
          className={`${!name.trim().length && 'has-error'}`}
        />
        {!name.trim().length && <span>Este campo es necesario</span>}

        <input
          onChange={onChange}
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>Este email no es valido</span>}

        <input
          onChange={onChange}
          name="password1"
          value={password1}
          type="password"
          placeholder="Password"
          className={`${!password1.trim().length && 'has-error'}`}
        />
        {!password1.trim().length && <span>Este campo es necesario</span>}
        {password1.trim().length > 0 && password1.trim().length < 6 && (
          <span>Mínimo 6 carácteres</span>
        )}

        <input
          onChange={onChange}
          name="password2"
          value={password2}
          type="password"
          placeholder="Password Repeat"
          className={`${!password2.trim().length && 'has-error'}`}
          minLength={6}
        />
        {!password2.trim().length && <span>Este campo es necesario</span>}
        {password1 !== password2 && <span>Pass1 debe ser igual que pass2</span>}

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset values
        </button>
      </form>
    </div>
  );
};
