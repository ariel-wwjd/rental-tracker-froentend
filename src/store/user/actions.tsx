import { createAsyncThunk } from '@reduxjs/toolkit';
import { googleLoginUser } from '../../api/loginService';

export const userGoogleLogin = createAsyncThunk(
  'auth/login/google',
  async () => {
    try {
      const response = await googleLoginUser();
      const { data } = response;
      return data;
    } catch (error) {
      return error;
    }
  },
);
