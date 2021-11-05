import { Provider } from 'react-redux';
import './App.css';
import { store } from './store';
import { RootRoute } from './views/root';

function App() {
  return (
    <Provider store={store}>
      <RootRoute />
    </Provider>
  );
}

export { App };
