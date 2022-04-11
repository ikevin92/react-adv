import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
import '../styles/styles.css';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
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
            .min(2, 'El nombre debe tener mas de 2 caracteres')
            .max(15, 'El nombre no puede tener mas de 15 caracteres')
            .required('El nombre es requerido'),
          email: Yup.string()
            .email('El email no es valido')
            .required('El email es requerido'),
          password1: Yup.string()
            .min(6, 'La contraseña debe tener mas de 6 caracteres')
            .required('La contraseña es requerida'),
          password2: Yup.string()
            .oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden')
            .required('La contraseña es requerida'),
        })}>
        {({ handleReset }) => (
          <Form>
            <MyTextInput label='Nombre' name='name' placeholder='Kevin' />
            <MyTextInput
              label='Email'
              name='email'
              type='email'
              placeholder='ikevin1992@gmail.com'
            />
            <MyTextInput
              label='Password 1'
              name='password1'
              type='password'
              placeholder='******'
            />
            <MyTextInput
              label='Password 2'
              name='password2'
              type='password'
              placeholder='********'
            />
            <button type='submit'>Create</button>
            <button type='button' onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
