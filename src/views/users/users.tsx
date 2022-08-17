/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Navbar } from '../../components/navbar';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { appSetupSelector } from '../../store/appSetup/slice';
import { userSelector } from '../../store/user/slice';
import { darkTheme } from '../../themes/dark';
import { lightTheme } from '../../themes/light';
import { StyledUsers } from './style';
import { Message } from '../../components/message';
import { closeMessage, messageSelector } from '../../store/message/slice';
import { ClientCardList } from '../../components/ClientCardList';

const Users = () => {
  const { theme } = useAppSelector(appSetupSelector);
  const { message, type } = useAppSelector(messageSelector);
  const { user } = useAppSelector(userSelector);

  const {
    firstName, lastName, image, email,
  } = user;
  const dispatch = useAppDispatch();
  const history = useHistory();

  if (email === '') {
    history.push('/');
  }

  useEffect(() => {
    if (email === '') {
      history.push('/');
    }
  }, []);

  const messageCloseHandler = () => {
    dispatch(closeMessage());
  };

  const getType = () => {
    if (type === 'success' || type === 'error' || type === 'warning') {
      return type;
    }
    return undefined;
  };

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
          firstName={firstName}
          lastName={lastName}
          userPicture={image}
        />
        <ClientCardList clients={user.clients} />
      </StyledUsers>
    </ThemeProvider>
  );
};

export { Users };
