/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
import { PaymentsList } from '../paymentsList';
// import { Payment } from '../payment';
import { IClients } from '../types/userTypes';
import { StyledCard } from './style';

const ClientCard = (client: IClients) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const { pendingPayments } = client;

  const clickHandler = (id: string, showState: boolean) => {
    setShowMore(!showState);
  };

  return (
    <StyledCard>
      {/* <Payment
        amount={pendingPayments[0].amount}
        _id={pendingPayments[0]._id}
        concept={pendingPayments[0].concept}
        createdAt={pendingPayments[0].createdAt}
        currency={pendingPayments[0].currency}
        picture={pendingPayments[1].picture}
        showMore={showMore}
        onClick={clickHandler}
      /> */}
      <PaymentsList payments={pendingPayments} />

    </StyledCard>
  );
};

export { ClientCard };
