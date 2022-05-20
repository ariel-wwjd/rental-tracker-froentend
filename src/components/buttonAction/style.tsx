import styled from 'styled-components';

interface IStyledButton {
  state: string;
}

export const StyledButton = styled.button<IStyledButton>`
  width: 100%;
  line-height: 40px;
  height: 40px;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.TEXT_M};
  border: ${({ theme, state }) => (
    state === 'primary' ? theme.BUTTON_PRIMARY_BORDER : theme.BUTTON_SECONDARY_BORDER
  )};
  color: ${({ theme, state }) => (
    state === 'primary' ? theme.BUTTON_PRIMARY_TEXT_COLOR : theme.BUTTON_SECONDARY_TEXT_COLOR
  )};
  background-color: ${({ theme, state }) => (
    state === 'primary' ? theme.BUTTON_PRIMARY_BACKGROUND : theme.BUTTON_SECONDARY_BACKGROUND
  )};
  transition: background-color ease-in-out 150ms;
  &:hover {
    background-color: ${({ theme, state }) => (
    state === 'primary' ? theme.BUTTON_PRIMARY_BACKGROUND_HOVER : theme.BUTTON_SECONDARY_BACKGROUND_HOVER
  )};
  }
`;
