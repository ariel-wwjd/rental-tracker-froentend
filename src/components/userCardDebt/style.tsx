import styled from 'styled-components';

export const StyledClientCardDebt = styled.div`
  padding: 1em;
  div{
    display: flex;
    justify-content: space-between;
    padding: .2em;
  }
  .debt-container{
    margin: 1em 4em;
    border-bottom: dashed 1px black;
    font-size: .8em;
    :last-child{
      border: none;
    }
  }
  border-bottom: solid 1px black;
`;
