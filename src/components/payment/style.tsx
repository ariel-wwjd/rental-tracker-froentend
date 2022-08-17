/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

interface PropsImageContainer {
  showMore: boolean;
  hasImage: boolean;
}

const StyledPayment = styled.div`
  display: flex;
  margin-top: 8px;
  margin-left: 18px;
  transition: transform ease-out 500ms;
  cursor: pointer;
`;

const StyledContainerPaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const StyledDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledDateConceptContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  color: ${({ theme }) => (theme.PAYMENT_CONCEPT_TEXT_COLOR)};
`;

const StyledAmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: ${({ theme }) => (theme.PAYMENT_AMOUNT_TEXT_COLOR)};
`;

const StyledBar = styled.div`
  width: 8px;
  border-radius: 2px;
  background-color: #7e7b7b;
  background-color: ${({ theme }) => (theme.PAYMENT_BAR_BACKGROUND)};
`;

const StyledImageContainer = styled.div<PropsImageContainer>(
  ({ showMore, hasImage }) => `
  transition: transform ease-out 250ms;
  transform: ${showMore ? 'scaleY(1)' : 'scaleY(0)'};
  height: ${showMore && hasImage ? 'auto' : showMore ? '24px' : '0px'};
  margin: auto;
`,
);

const StyledImage = styled.img`
  max-width: 290px;
  width: 100%;
  max-height: 290px;
  height: 100%;
`;

const StyledImageText = styled.div`
  color: ${({ theme }) => (theme.CLIENT_CARD_NO_IMAGE_TEXT)};
`;

export {
  StyledPayment,
  StyledImageContainer,
  StyledDateConceptContainer,
  StyledAmountContainer,
  StyledDataContainer,
  StyledBar,
  StyledContainerPaymentInfo,
  StyledImage,
  StyledImageText,
};
