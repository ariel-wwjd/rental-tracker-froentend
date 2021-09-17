import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './home';

const PublicRoute = () => {
  const callback = () => {};
  callback();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

const RootRoute = () => <PublicRoute />;

export { RootRoute };
