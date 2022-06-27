import { FC, HTMLProps } from 'react';
import { Field } from 'formik';

interface TextFieldProps extends HTMLProps<HTMLInputElement> {
  error: boolean;
  helperText: string;
}

export const TextField: FC<TextFieldProps> = ({ error, helperText, ...rest }) => {
  return (
    <div className='mb-3 xl:w-96'>
      <label className='form-label inline-block mb-1 text-gray-700 pt-2 text-md font-medium'>
        Enter Server IP:PORT
      </label>
      <Field
        type='text'
        className='
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      '
        {...rest}
      />
      <div className='text-red-500 text-sm'>{helperText}</div>
    </div>
  );
};
