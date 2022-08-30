import { useTranslation } from 'react-i18next';
import { IPayment } from '../types/userTypes';
import {
  StyledPayment,
  StyledImageContainer,
  StyledDateConceptContainer,
  StyledAmountContainer,
  StyledDataContainer,
  StyledBar,
  StyledContainerPaymentInfo,
  StyledImage,
  StyledImageText,
} from './style';

export interface IPaymentComponent extends IPayment {
  showMore: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick(id: string): void;
}

const Payment = ({
  _id, amount, concept, currency, createdAt, picture, showMore, onClick,
}: IPaymentComponent) => {
  const [textFor] = useTranslation('clientCard');

  const clickHandler = (event: any) => {
    onClick(_id);
    event.stopPropagation();
  };

  return (
    <StyledPayment onClick={(event) => (clickHandler(event))}>
      <StyledBar />
      <StyledContainerPaymentInfo>
        <StyledDataContainer>
          <StyledDateConceptContainer>
            <div>{new Date(createdAt).toDateString()}</div>
            <div>{concept}</div>
          </StyledDateConceptContainer>
          <StyledAmountContainer>
            <div>{`${amount} ${currency}`}</div>
          </StyledAmountContainer>
        </StyledDataContainer>
        <StyledImageContainer showMore={showMore} hasImage={picture !== ''}>
          {picture
            ? <StyledImage src={picture} alt="" />
            : <StyledImageText>{textFor('imageText')}</StyledImageText>}
        </StyledImageContainer>
      </StyledContainerPaymentInfo>
    </StyledPayment>
  );
};

export { Payment };
