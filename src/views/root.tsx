import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './home';
import { Users } from './users';
import { MessageScreen } from './messageScreen';
import { SuccessLoginScreen } from './successLogin';

const failLoginScreen = <MessageScreen title="Login fail, please try again later" timer={500} callback={() => {}} />;

const PublicRoute = () => {
  const callback = () => {};
  callback();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/login/success" component={SuccessLoginScreen} />
        <Route path="/login/fail" component={() => failLoginScreen} />
      </Switch>
    </BrowserRouter>
  );
};

const RootRoute = () => <PublicRoute />;

export { RootRoute };
