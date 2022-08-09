/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { IPayment } from '../types/userTypes';
import { StyledPaymentList } from './style';
import { Payment } from '../payment';

interface IPaymentList {
  payments: IPayment[];
}

const PaymentsList = ({
  payments,
}: IPaymentList) => {
  const [showMorePayments, setShowMorePayments] = useState<string[]>([]);

  const verifyId = (id: string): boolean => (
    !!showMorePayments.find((idInArray) => (idInArray === id))
  );

  const updateShowMorePayments = (id: string): void => {
    console.log(showMorePayments);

    const existingId = showMorePayments.find(
      (idInArray) => (idInArray === id),
    );
    if (existingId) {
      const newIdsArray = showMorePayments.filter((idInArray) => (
        idInArray !== existingId
      ));
      setShowMorePayments(newIdsArray);
    } else {
      const newIdsArray = [...showMorePayments, id];
      setShowMorePayments(newIdsArray);
    }
  };

  const generatePayments = () => (
    payments.map((payment) => (
      <Payment
        key={payment._id}
        _id={payment._id}
        amount={payment.amount}
        concept={payment.concept}
        currency={payment.currency}
        picture={payment.picture}
        createdAt={payment.createdAt}
        showMore={verifyId(payment._id)}
        onClick={updateShowMorePayments}
      />
    ))
  );

  return (
    <StyledPaymentList>
      {generatePayments()}
    </StyledPaymentList>
  );
};

export { PaymentsList };
