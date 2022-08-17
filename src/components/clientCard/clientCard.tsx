/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar } from '../avatar';
import { PaymentsList } from '../paymentsList';
import { IClients } from '../types/userTypes';
import {
  StyledAvatarContainer,
  StyledClientInfo,
  StyledPaymentsInfo,
  StyledCard,
  StyledSummaryContainer,
  StyledName,
  StyledEmail,
  StyledAmount,
  StyledRequest,
} from './style';

const ClientCard = (client: IClients) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [textFor] = useTranslation('clientCard');

  const {
    pendingPayments, firstName, lastName, email,
  } = client;
  const totalAmount = pendingPayments.map(
    (payment) => (payment.amount),
  ).reduce(
    (previous, current) => (previous + current),
  );

  const allSameCurrency = pendingPayments.map(
    (payment) => (payment.currency),
  ).every(
    (type) => (type === pendingPayments[0].currency),
  );

  const currency = allSameCurrency ? pendingPayments[0].currency : '';
  const TotalAmmountByCurrency = allSameCurrency ? totalAmount : '';

  const paymentRequests = pendingPayments.length;

  const clickHandler = () => {
    setShowMore(!showMore);
  };

  return (
    <StyledCard onClick={clickHandler}>
      <StyledClientInfo>
        <StyledAvatarContainer>
          <Avatar firstName={firstName} lastName={lastName} picture="" showName={false} />
          <div>
            <StyledName>
              {`${firstName} ${lastName}`}
            </StyledName>
            <StyledEmail>{email}</StyledEmail>
          </div>
        </StyledAvatarContainer>
        <StyledSummaryContainer>
          <StyledAmount>
            {`${TotalAmmountByCurrency} ${currency}`}
          </StyledAmount>
          <StyledRequest>
            {`${paymentRequests} ${textFor('paymetRequest')}${paymentRequests > 0 ? 's' : ''}`}
          </StyledRequest>
        </StyledSummaryContainer>
      </StyledClientInfo>
      <StyledPaymentsInfo showMore={showMore}>
        <PaymentsList payments={pendingPayments} />
      </StyledPaymentsInfo>
    </StyledCard>
  );
};

export { ClientCard };
