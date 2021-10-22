import { httpClient } from '../requestAdapter';

export const loginUser = async () => httpClient.get('/api/auth/google');

export const fetchAuthUser = async () => httpClient.get('/api/auth/user');
