import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { GlobalStyles } from './globalStyles';
import { store } from './store';
import { RootRoute } from './views/root';
import { commonStyles } from './globalStyles/commonStyles';
import { multiLanguageInit } from './multiLanguageConfig';

function App() {
  multiLanguageInit();

  return (
    <Provider store={store}>
      <ThemeProvider theme={commonStyles}>
        <I18nextProvider i18n={i18next}>
          <GlobalStyles />
          <RootRoute />
        </I18nextProvider>
      </ThemeProvider>
    </Provider>
  );
}

export { App };
