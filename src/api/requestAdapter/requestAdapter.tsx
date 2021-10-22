import axios from 'axios';

const REST_BASE_URL = process.env.REACT_APP_BASE_API_URL;

const httpClient = axios.create({
  baseURL: REST_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

httpClient.interceptors.response.use((response: any) => response, (error) => {
  throw (error.response);
});

export {
  httpClient,
};
