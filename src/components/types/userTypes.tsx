interface IPayment {
  _id: string;
  amount: number;
  concept: string;
  createdAt: string;
  currency: string;
  picture: string;
}

interface IClients {
  _id: string;
  createdAt: string;
  email: string;
  firstName: string;
  lastName: string;
  pendingPayments: IPayment[];
}

interface IUserResponse {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  businessDescription: string;
  commonImage: string;
  createdAt: string;
  googleAccountId: string;
  clients: IClients[];
}

export type {
  IUserResponse,
};
