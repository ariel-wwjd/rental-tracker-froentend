/* eslint-disable no-underscore-dangle */
import { cloneDeep } from 'lodash';
import { createSlice, createSelector } from '@reduxjs/toolkit';
import { RootSate } from '..';
import { userReview } from './actions';
import { IUserResponse } from '../../components/types/userTypes';

interface IUser {
  isLoginInProgress: boolean;
  user: IUserResponse;
}

const initialState: IUser = {
  user: {
    _id: '',
    businessDescription: '',
    commonImage: '',
    createdAt: '',
    email: '',
    firstName: '',
    lastName: '',
    googleAccountId: '',
    image: '',
    clients: [],
  },
  isLoginInProgress: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userReview.pending, (state) => {
      const newState = cloneDeep(state);
      newState.isLoginInProgress = true;
      return newState;
    });
    builder.addCase(userReview.fulfilled, (state, { payload }) => {
      const newState = cloneDeep(state);
      newState.isLoginInProgress = false;
      newState.user = payload as IUserResponse;
      return newState;
    });
    // TODO: make sure this case gets used, it look like never come to this case
    builder.addCase(userReview.rejected, (state) => {
      const newState = cloneDeep(state);
      newState.isLoginInProgress = false;
      return newState;
    });
  },
});

const userState = (state: RootSate) => (state);

export const userSelector = createSelector(userState, (state) => (state.rootReducer.user));
