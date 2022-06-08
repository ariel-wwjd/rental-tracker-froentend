import { createAsyncThunk } from '@reduxjs/toolkit';
import { googleLoginUser, user } from '../../api/loginService';
import { userGoogleAdapted } from '../../components/types/googleTypes';

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

export const userReview = createAsyncThunk(
  'user',
  async (userFromGoogle : userGoogleAdapted) => {
    try {
      await user(userFromGoogle);
    } catch (error) {
      console.log(error);
    }
  },
);
