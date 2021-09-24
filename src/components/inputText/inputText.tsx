/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-autofocus */
import './inputText.css';
import { useFormContext } from 'react-hook-form';
import { classNames } from '../../utils';

interface IInputText {
  placeholder: string;
  type: string;
  name: string;
  autoFocus?: boolean;
  id: string;
  required?: { value: boolean, message: string};
  maxLength?: { value: number, message: string};
  error: string;
}

const InputText = ({
  placeholder,
  type,
  name,
  autoFocus,
  id,
  required,
  error,
}: IInputText) => {
  const { register } = useFormContext();
  const inputClasses = classNames([
    { class: 'input', hasClass: true },
    { class: 'hasError', hasClass: !!error },
  ]);

  return (
    <div className="inputTextComponent">
      <input
        className={inputClasses}
        autoFocus={autoFocus}
        placeholder={placeholder}
        type={type}
        id={id}
        {...register(name, {
          required,
          minLength: { value: 4, message: 'The code needs at least 4 digits' },
        })}
      />
      <div className="error">
        {error && <span>{error}</span>}
      </div>
    </div>
  );
};

InputText.defaultProps = {
  autoFocus: false,
  required: { value: false, message: '' },
  maxLength: { value: 250, message: 'Text to long' },
};

export { InputText };
