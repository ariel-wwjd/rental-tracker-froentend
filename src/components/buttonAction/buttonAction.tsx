import './buttonAction.css';
import { classNames } from '../../utils';

interface IButtonAction {
  label: string;
  onClick(): void;
  color: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const ButtonAction = ({
  label, onClick, color, type, disabled,
}: IButtonAction) => {
  const clickHandler = () => {
    onClick();
  };

  const buttonClasses = classNames([
    { class: 'button', hasClass: true },
    { class: 'black', hasClass: color === 'black' },
    { class: 'white', hasClass: color === 'white' },
    { class: 'orange', hasClass: color === 'orange' },
    { class: 'blue', hasClass: color === 'blue' },
    { class: 'yellow', hasClass: color === 'yellow' },
  ]);

  return (
    <div className="actionButton">
      <button
        className={buttonClasses}
        onClick={clickHandler}
        type={type === 'submit' ? 'submit' : 'button'}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};

ButtonAction.defaultProps = {
  type: 'button',
  disabled: false,
};

export { ButtonAction };
