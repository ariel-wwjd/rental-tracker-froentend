import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './user/slice';
import { themeSlice } from './theme/slice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  theme: themeSlice.reducer,
});

export { rootReducer };
