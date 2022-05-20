import { createSlice, createSelector } from '@reduxjs/toolkit';
import { RootSate } from '..';

interface IMessage {
  message: string | undefined;
  type: string | undefined;
}

const initialState: IMessage = {
  message: undefined,
  type: undefined,
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    createMessage: (state, action) => {
      const dataPayload = action.payload;
      const { message, type } = dataPayload as IMessage;
      const newState = { ...state };
      newState.message = message;
      newState.type = type;

      return newState;
    },
    closeMessage: (state) => {
      const newState = { ...state };
      newState.message = undefined;
      newState.type = undefined;

      return newState;
    },
  },
  extraReducers: () => {},
});

const messageState = (state: RootSate) => (state);

export const messageSelector = createSelector(messageState, (state) => (state.rootReducer.message));

export const { createMessage, closeMessage } = messageSlice.actions;
