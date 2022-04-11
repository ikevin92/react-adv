import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  placeholder?: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      <ErrorMessage
        name={props.name}
        component='span'
        className='custom-span-error-class'
      />
    </>
  );
};
