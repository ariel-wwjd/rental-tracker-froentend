import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './user/slice';
import { appSetupSlice } from './appSetup/slice';
import { messageSlice } from './message/slice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  theme: appSetupSlice.reducer,
  message: messageSlice.reducer,
});

export { rootReducer };
