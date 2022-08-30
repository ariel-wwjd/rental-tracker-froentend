import { createAsyncThunk } from '@reduxjs/toolkit';
import { user } from '../../api/loginService';
import { userGoogleAdapted } from '../../components/types/googleTypes';

export const userReview = createAsyncThunk(
  'user',
  async (userFromGoogle : userGoogleAdapted) => {
    try {
      const response = await user(userFromGoogle);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);
