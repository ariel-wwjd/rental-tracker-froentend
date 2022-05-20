import styled from 'styled-components';

interface IStyledInputText {
  error: boolean;
}

export const StyledInputText = styled.div<IStyledInputText>`
  input {
    width: 100%;
    height: 40px;
    padding: 0px 16px;
    border-bottom: ${({ theme, error }) => (
    error ? theme.INPUT_BORDER_ERROR : theme.INPUT_BORDER
  )};
    font-size: ${({ theme }) => (theme.TEXT_L)};
    color: ${({ theme }) => (theme.INPUT_TEXT_COLOR)};
    background-color: ${({ theme }) => (theme.INPUT_BACKGROUND)};
    &::placeholder {
      color: ${({ theme }) => (theme.INPUT_PLACEHOLDER_COLOR)};
    }
    &:focus {
      outline: none;
      border-bottom: ${({ theme }) => (theme.INPUT_BORDER_FOCUS)};
    }
  }
  div {
    padding-top: 2px;
    height: 24px;
    text-align: end;
    color: ${({ theme }) => (theme.INPUT_ERROR_COLOR)};
  }
`;
