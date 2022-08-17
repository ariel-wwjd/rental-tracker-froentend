/* eslint-disable no-underscore-dangle */
import { ClientCard } from '../clientCard';
import { IClients } from '../types/userTypes';
import { StyledClientCardList } from './style';

interface IClientsList {
  clients: IClients[];
}

const ClientCardList = (clients : IClientsList) => {
  const generateClients = () => (
    // eslint-disable-next-line react/destructuring-assignment
    clients.clients.map((client) => (
      <ClientCard
        key={client._id}
        _id={client._id}
        createdAt={client.createdAt}
        email={client.email}
        firstName={client.firstName}
        lastName={client.lastName}
        pendingPayments={client.pendingPayments}
      />
    ))
  );

  return (
    <StyledClientCardList>
      {generateClients()}
    </StyledClientCardList>
  );
};

export { ClientCardList };
