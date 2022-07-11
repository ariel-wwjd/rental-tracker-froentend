import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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

const Users = () => {
  const { theme } = useAppSelector(appSetupSelector);
  const { message, type } = useAppSelector(messageSelector);
  const [textFor] = useTranslation('user');

  const {
    user,
  } = useAppSelector(userSelector);

  const {
    firstName, lastName, image, email,
  } = user;
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!email) {
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
        {textFor('greeting')}
      </StyledUsers>
    </ThemeProvider>
  );
};

export { Users };
