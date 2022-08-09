import { IPayment } from '../types/userTypes';
import { StyledPayment, StyledImageContainer } from './style';

export interface IPaymentComponent extends IPayment {
  showMore: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick(id: string): void;
}

const Payment = ({
  _id, amount, concept, currency, createdAt, picture, showMore, onClick,
}: IPaymentComponent) => {
  // const clickHandler = () => {
  //   onClick(_id);
  // };
  console.log(currency);

  return (
    <StyledPayment onClick={() => (onClick(_id))}>
      <div>
        <span>{concept}</span>
        <span>{amount}</span>
        <span>{currency}</span>
      </div>
      {/* {showMore && ( */}
      <StyledImageContainer showMore={showMore} hasImage={picture !== ''}>
        {picture ? <img src={picture} alt="" /> : <></>}
        <span>{createdAt}</span>
      </StyledImageContainer>
      {/* )} */}
    </StyledPayment>
  );
};

export { Payment };
