import { Formik, Form } from 'formik';
import * as Yup from 'yup';
//componentes
import { MyTextInput, MySelect, MyCheckbox } from '../components';
//estilos
import '../styles/styles.css';

export const FromikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>
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
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'Esta opción no es permitida')
            .required('Required'),
        })}>
        {(formik) => (
          <Form>
            <MyTextInput
              label='First Name'
              name='firstName'
              placeholder='Kevin'
            />
            <MyTextInput
              label='Last Name'
              name='lastName'
              placeholder='Echeverri'
            />
            <MyTextInput
              label='First Name'
              name='email'
              type='email'
              placeholder='ikevin1992@gmail.com'
            />

            <MySelect name='jobType' label='Job Type'>
              <option value=''>Pick something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-jr'>IT Junior</option>
            </MySelect>

            <MyCheckbox name='terms' label='Terms & conditions' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
