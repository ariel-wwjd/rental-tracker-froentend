/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Navbar } from '../../components/navbar';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { changeTheme, themeSelector } from '../../store/theme/slice';
import { userSelector } from '../../store/user/slice';
import { darkTheme } from '../../themes/dark';
import { lightTheme } from '../../themes/light';
import { StyledUsers } from './style';
import { Message } from '../../components/message';
import { closeMessage, messageSelector } from '../../store/message/slice';
import { UserCardDebt } from '../../components/userCardDebt';

const Users = () => {
  const { theme } = useAppSelector(themeSelector);
  const { message, type } = useAppSelector(messageSelector);
  // eslint-disable-next-line object-curly-newline
  const { firstName, lastName, picture, email } = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!email) {
      history.push('/');
    }
  }, []);

  const navbarItems = [{
    label: theme,
    key: 'themeMode',
    onClick: () => { dispatch(changeTheme()); },
  }];

  const messageCloseHandler = () => {
    dispatch(closeMessage());
  };

  const getType = () => {
    if (type === 'success' || type === 'error' || type === 'warning') {
      return type;
    }
    return undefined;
  };

  const ExamplePendingPayments = [{
    _paymentId: 'string',
    createdAt: '02/02/2022',
    concept: 'algo',
    amount: 500,
    picture: undefined,
  }];
  return (
    <ThemeProvider theme={theme === 'Light Mode' ? darkTheme : lightTheme}>
      <StyledUsers>
        {message && (
          <Message
            onClose={messageCloseHandler}
            message={message}
            type={getType()}
          />
        )}
        <Navbar
          items={navbarItems}
          firstName={firstName}
          lastName={lastName}
          userPicture={picture}
        />
        {/* Aqui va el card */}
        <UserCardDebt
          firstName="dog"
          lastName={lastName}
          email="dog@gmail.com"
          showDetail={false}
          pendingPayments={ExamplePendingPayments}
        />
      </StyledUsers>
    </ThemeProvider>
  );
};

export { Users };
