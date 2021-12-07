/* eslint-disable no-undef */
import './buttonAction.css';
import { classNames } from '../../utils';

interface IButtonAction {
  onClick(): void;
  color: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  children: React.ReactNode;
}

const ButtonAction = ({
  onClick, color, type, disabled, children,
}: IButtonAction) => {
  const clickHandler = () => {
    onClick();
  };

  const buttonClasses = classNames([
    { class: 'button', hasClass: true },
    { class: 'black', hasClass: color === 'black' },
    { class: 'blackOutline', hasClass: color === 'blackOutline' },
    { class: 'white', hasClass: color === 'white' },
    { class: 'whiteOutline', hasClass: color === 'whiteOutline' },
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
        {children}
      </button>
    </div>
  );
};

ButtonAction.defaultProps = {
  type: 'button',
  disabled: false,
};

export { ButtonAction };
