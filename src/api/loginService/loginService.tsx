import { httpClient } from '../requestAdapter';

export const googleLoginUser = async () => httpClient.get('/api/auth/user');
