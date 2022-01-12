import styled from 'styled-components';

export const StyledHome = styled.div`
  background-color: ${({ theme }) => (theme.BACKGROUND_PRIMARY_COLOR)};
  height: 100%;
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
`;

export const StyledLogo = styled.div`
  color: ${({ theme }) => (theme.LOGO_TEXT_COLOR)};
  font-size: ${({ theme }) => (theme.TEXT_4XL)};
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFormContainer = styled.div`
  height: 30%;
  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 400px;
    margin: auto;
  }
`;

export const StyledActions = styled.div`
  height: 12%;
  min-height: 100px;
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  @media (min-width: 500px) {
    height: 20%;
    .container {
      flex-direction: row;
      max-width: 600px;
      margin: auto;
    }

    .container .buttonContainer {
      width: 200px;
    }
  }

  @media (min-width: 1024px) {
    height: 30%;
    .container {
      max-width: 600px;
    }
  }
`;
