/* eslint-disable no-undef */
import { StyledButton } from './style';

interface IButtonAction {
  onClick(): void;
  state?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  disabled?: boolean;
  children: React.ReactNode;
}

const ButtonAction = ({
  onClick, state, type, disabled, children,
}: IButtonAction) => {
  const clickHandler = () => {
    onClick();
  };

  return (
    <StyledButton
      onClick={clickHandler}
      state={state === 'primary' ? 'primary' : 'secondary'}
      type={type === 'submit' ? 'submit' : 'button'}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

ButtonAction.defaultProps = {
  type: 'button',
  disabled: false,
  state: 'primary',
};

export { ButtonAction };
