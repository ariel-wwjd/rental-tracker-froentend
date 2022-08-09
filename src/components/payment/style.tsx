/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

interface PropsImageContainer {
  showMore: boolean;
  hasImage: boolean;
}

const StyledPayment = styled.div`
  /* color: red; */
  /* transform: scaleY(0.1); */
  background-color: azure;
  margin-top: 8px;
  transition: all ease-out 500ms;
  cursor: pointer;
`;

// color: ${showMore ? '#6495ED' : '#2b2b2b'};
const StyledImageContainer = styled.div<PropsImageContainer>(
  ({ showMore, hasImage }) => `
  transition: ease-out 250ms;
  transform: ${showMore ? 'scaleY(1)' : 'scaleY(0)'};
  height: ${showMore && hasImage ? '250px' : showMore ? '50px' : '0px'};
`,
);

export { StyledPayment, StyledImageContainer };
