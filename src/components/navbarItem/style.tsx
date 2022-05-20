import styled from 'styled-components';

export const StyledNavbarItem = styled.button`
  background-color: transparent;
  height: 34px;
  color: ${({ theme }) => (theme.NAVBAR_ITEM_TEXT_COLOR)};
  margin: 0 6px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => (theme.NAVBAR_ITEM_TEXT_COLOR_HOVER)};
  }
`;
