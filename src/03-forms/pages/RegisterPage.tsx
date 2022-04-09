import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {
  // personal hook
  const {
    formData,
    isValidEmail,
    resetForm,
    onChange,
    name,
    email,
    password,
    password2,
  } = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  // const { email, name, password, password2 } = registerData;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          name='name'
          onChange={onChange}
          value={name}
          type='text'
          placeholder='Name'
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          name='email'
          onChange={onChange}
          value={email}
          type='email'
          placeholder='Email'
          className={`${!isValidEmail(email) && 'has-error'}`}
        />

        {!isValidEmail(email) && <span>Email no es válido</span>}

        <input
          name='password'
          onChange={onChange}
          value={password}
          type='password'
          placeholder='Password'
        />

        {password.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password.trim().length > 0 && password.trim().length < 6 && (
          <span>La contraseña debe tener 6 caracteres</span>
        )}

        <input
          name='password2'
          onChange={onChange}
          value={password2}
          type='password'
          placeholder='Repeat Password'
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 &&
          password2.trim() !== password.trim() && (
            <span>Las contraseñas deben de ser iguales</span>
          )}

        <button type='submit'>Create</button>
        <button type='button' onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
