import styled from 'styled-components';

interface IStyledMessage {
  type: 'success' | 'error' | 'warning' | undefined;
}

const getType = (type: string | undefined, theme: any) => {
  if (type === undefined) {
    return theme.MESSAGE_DEFAULT_BACKGROUND;
  } if (type === 'success') {
    return theme.MESSAGE_SUCCESS_BACKGROUND;
  } if (type === 'error') {
    return theme.MESSAGE_ERROR_BACKGROUND;
  }
  return theme.MESSAGE_WARNING_BACKGROUND;
};

const StyledMessage = styled.div<IStyledMessage>`
display: flex;
flex-direction: column;
bottom: 0;
margin: 5% 5%;
width: 90%;
background-color: ${({ type, theme }) => (getType(type, theme))};
position: fixed;
border-radius: 30px 30px 4px 30px;
box-shadow: ${({ theme }) => (theme.MESSAGE_BOX_SHADOW)};
button {
  align-self: flex-end;
  font-size: ${({ theme }) => (theme.TEXT_L)};
  width: 28px;
  height: 28px;
  margin-right: 8px;
  margin-top: 4px;
  background-color: transparent;
  cursor: pointer;
  color: ${({ theme }) => (theme.MESSAGE_CLOSE_BUTTON_TEXT_COLOR)};
  &:hover {
    color: ${({ theme }) => (theme.MESSAGE_CLOSE_BUTTON_TEXT_COLOR_HOVER)};

  }
}
.message {
  padding: 8px 24px;
  color: ${({ theme }) => (theme.MESSAGE_TEXT_COLOR)}
}
.counter {
  display: flex;
  justify-content: flex-end;
  padding: 8px 8px;
  color: ${({ theme }) => (theme.MESSAGE_TIMER_TEXT_COLOR)}
}
`;

export { StyledMessage };
