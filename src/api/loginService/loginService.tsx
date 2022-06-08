import { userGoogleAdapted } from '../../components/types/googleTypes';
import { httpClient } from '../requestAdapter';

const googleLoginUser = async () => (
  httpClient.get('/api/auth/user')
);

const user = async (userFromGoogle: userGoogleAdapted) => (
  httpClient.post<userGoogleAdapted>('/api/user', userFromGoogle)
);

export {
  googleLoginUser,
  user,
};
