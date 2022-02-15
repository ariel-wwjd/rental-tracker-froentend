import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './user/slice';
import { themeSlice } from './theme/slice';
import { messageSlice } from './message/slice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  theme: themeSlice.reducer,
  message: messageSlice.reducer,
});

export { rootReducer };
