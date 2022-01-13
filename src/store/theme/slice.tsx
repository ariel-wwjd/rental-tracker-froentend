import { createSlice, createSelector } from '@reduxjs/toolkit';
import { RootSate } from '..';

interface ITheme {
  theme: 'Dark Mode' | 'Light Mode';
}

const initialState: ITheme = {
  theme: 'Dark Mode',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      const newState = { ...state };
      newState.theme = state.theme === 'Light Mode' ? 'Dark Mode' : 'Light Mode';
      return newState;
    },
  },
  extraReducers: () => {},
});

const themeState = (state: RootSate) => (state);

export const themeSelector = createSelector(themeState, (state) => (state.rootReducer.theme));

export const { changeTheme } = themeSlice.actions;
