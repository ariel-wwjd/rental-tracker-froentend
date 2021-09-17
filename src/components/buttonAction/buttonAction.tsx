import './buttonAction.css';
import { classNames } from '../../utils';

interface IButtonAction {
  label: string;
  onClick(): void;
  color: string;
}

const ButtonAction = ({ label, onClick, color }: IButtonAction) => {
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
        type="button"
      >
        {label}
      </button>
    </div>
  );
};

export { ButtonAction };
