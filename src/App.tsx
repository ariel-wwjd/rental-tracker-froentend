import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { store } from './store';
import { RootRoute } from './views/root';
import { commonStyles } from './globalStyles/commonStyles';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={commonStyles}>
        <GlobalStyles />
        <RootRoute />
      </ThemeProvider>
    </Provider>
  );
}

export { App };
