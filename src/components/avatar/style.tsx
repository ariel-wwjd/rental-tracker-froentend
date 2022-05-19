import styled from 'styled-components';

export const StyledAvatar = styled.div`
  & {
    display: flex;
    height: 100%;
    align-items: center;
    margin: 0 8px;
  }
  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
  p {
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: .8em;
    color: ${({ theme }) => (theme.AVATAR_TEXT_INITIALS_COLOR)};
    background: ${({ theme }) => (theme.AVATAR_BACKGROUND)};
    border-radius: 50%;
  }
  span {
    color: ${({ theme }) => (theme.AVATAR_TEXT_COLOR)};
    margin-left: 8px;
  }
`;
