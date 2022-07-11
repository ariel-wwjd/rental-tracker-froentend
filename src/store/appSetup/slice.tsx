import { createSlice, createSelector } from '@reduxjs/toolkit';
import { RootSate } from '..';

interface IAppSetup {
  theme: 'Dark Mode' | 'Light Mode';
  language: 'Español' | 'English';
}

const initialState: IAppSetup = {
  theme: 'Dark Mode',
  language: 'English',
};

export const appSetupSlice = createSlice({
  name: 'appSetup',
  initialState,
  reducers: {
    changeTheme: (state) => {
      const newState = { ...state };
      newState.theme = state.theme === 'Light Mode' ? 'Dark Mode' : 'Light Mode';
      return newState;
    },
    changeLanguage: (state) => {
      const newState = { ...state };
      newState.language = state.language === 'Español' ? 'English' : 'Español';
      return newState;
    },
  },
  extraReducers: () => {},
});

const themeState = (state: RootSate) => (state);

export const appSetupSelector = createSelector(themeState, (state) => (state.rootReducer.theme));

export const { changeTheme, changeLanguage } = appSetupSlice.actions;
