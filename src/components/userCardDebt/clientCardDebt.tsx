import { StyledClientCardDebt } from './style';
import { Avatar } from '../avatar';

interface IPayments {
  _paymentId: string ;
  createdAt: string ;
  concept: string ;
  amount: number ;
  picture: string | undefined ;
}

interface IClientCardDebt {
    firstName: string ;
    lastName: string | undefined ;
    email: string ;
    showDetail?: boolean ;
    pendingPayments: IPayments[];
}

const ClientCardDebt = ({
  firstName,
  lastName,
  email,
  showDetail,
  pendingPayments,
}: IClientCardDebt) => {
  const DebtsArray = pendingPayments.map((payment) => payment.amount);
  const totalDebt = DebtsArray.reduce((total, next) => total + next);

  const debtsDetail = pendingPayments.map((debt) => (
    <section className="debt-container">
      <div>
        <p>{debt.createdAt}</p>
        <p>
          {debt.amount}
          {' '}
          Bs
        </p>
      </div>
      <p>{debt.concept}</p>
    </section>
  ));
  return (
    <StyledClientCardDebt>
      <div>
        <Avatar firstName={firstName} lastName={lastName} picture={undefined} />
        <h2>
          {totalDebt}
          {' '}
          Bs
        </h2>
      </div>
      <div>
        <p>{email}</p>
        <p>
          {pendingPayments.length}
          {' '}
          Payment
          {pendingPayments.length > 1 && 's'}
          {' '}
          pending
        </p>
      </div>

      {showDetail ? debtsDetail : <></>}
    </StyledClientCardDebt>
  );
};

ClientCardDebt.defaultProps = {
  showDetail: false,
};

export { ClientCardDebt };
