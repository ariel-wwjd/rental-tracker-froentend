import styled from 'styled-components';

export const StyledNavbar = styled.div`
  background-color: ${({ theme }) => (theme.NAVBAR_BACKGROUND)};
  border-bottom: ${({ theme }) => (theme.NAVBAR_BORDER)};
  height: 36px;
  line-height: 36px;
  display: flex;
  justify-content: space-between;
`;
