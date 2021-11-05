import { createSlice, createSelector } from '@reduxjs/toolkit';
import { RootSate } from '..';
import { userGoogleLogin } from './actions';

interface IUser {
  isLoginInProgress: boolean;
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  picture: string | undefined;
  googleId: string | undefined;
}

const initialState: IUser = {
  isLoginInProgress: false,
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  picture: undefined,
  googleId: undefined,
};

interface IPayload {
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  googleId: string;
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userGoogleLogin.pending, (state) => {
      const { ...newState } = { ...state };
      newState.isLoginInProgress = true;
      return newState;
    });
    builder.addCase(userGoogleLogin.fulfilled, (state, { payload }) => {
      const { ...newState } = { ...state };
      const user = payload as IPayload;
      newState.isLoginInProgress = false;
      newState.picture = user.image;
      newState.email = user.email;
      newState.firstName = user.firstName;
      newState.lastName = user.lastName;
      newState.googleId = user.googleId;
      return newState;
    });
    builder.addCase(userGoogleLogin.rejected, (state) => {
      const { ...newState } = { ...state };
      newState.isLoginInProgress = false;
      return newState;
    });
  },
});

const userState = (state: RootSate) => (state);

export const userSelector = createSelector(userState, (state) => (state.rootReducer.user));
