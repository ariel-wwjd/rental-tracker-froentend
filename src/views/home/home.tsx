/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { ThemeProvider } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ButtonAction } from '../../components/buttonAction';
import { InputText } from '../../components/inputText';
import { formValues } from '../../components/types/formTypes';
import { userGoogleLogin } from '../../store/user/actions';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { themeSelector, changeTheme } from '../../store/theme/slice';
import { userSelector } from '../../store/user/slice';
import { lightTheme } from '../../themes/light';
import { darkTheme } from '../../themes/dark';
import { Navbar } from '../../components/navbar';
import { Message } from '../../components/message';
import { closeMessage, createMessage, messageSelector } from '../../store/message/slice';
import {
  StyledLogo, StyledFormContainer, StyledActions, StyledHome,
} from './style';

const Home = () => {
  const [isVisibleFormEmail, setIsVisibleFormEmail] = useState(false);
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(themeSelector);
  const history = useHistory();
  const user = useAppSelector(userSelector);
  const { message, type } = useAppSelector(messageSelector);

  useEffect(() => {
    if (user.email) {
      history.push('/users');
    }
  }, []);

  const accessEmailClickHandler = () => {
    setIsVisibleFormEmail(true);
  };

  const initialFormValues = {
    email: '',
  };

  const methods = useForm<formValues>({
    defaultValues: initialFormValues,
  });
  const { errors } = methods.formState;

  const onSubmitEmail = (data: any) => {
    console.log({ data });
  };

  const loginHandler = async () => {
    const googleLoginURL = process.env.REACT_APP_GOOGLE_LOGIN_URL;
    const loginWindow = window.open(googleLoginURL, '_blank', 'width=500,height=600');
    try {
      await dispatch(userGoogleLogin());
      dispatch(createMessage({
        message: 'User correctly logged',
        type: 'success',
      }));
      history.push('/users');
    } catch (error) {
      loginWindow?.close();
      dispatch(createMessage({
        message: `Can not login please make sure you are online or try again later
        Internal Error: ${error}`,
        type: 'error',
      }));
    }
  };

  const messageCloseHandler = () => {
    dispatch(closeMessage());
  };

  const navbarItems = [{
    label: theme,
    key: 'themeMode',
    onClick: () => { dispatch(changeTheme()); },
  }];

  const getType = () => {
    if (type === 'success' || type === 'error' || type === 'warning') {
      return type;
    }
    return undefined;
  };

  return (
    <ThemeProvider theme={theme === 'Light Mode' ? darkTheme : lightTheme}>
      <StyledHome>
        {message && (
          <Message
            onClose={messageCloseHandler}
            message={message}
            type={getType()}
          />
        )}
        <Navbar items={navbarItems} />
        <StyledLogo>KUENTAS</StyledLogo>
        <StyledFormContainer
          style={{ display: isVisibleFormEmail ? 'block' : 'none' }}
        >
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmitEmail)}
            >
              <InputText
                name="email"
                placeholder="Email"
                type="email"
                id="email"
                required={{ value: true, message: 'Code is empty' }}
                maxLength={{ value: 4, message: 'at least 4 digits' }}
                error={errors.email?.message || ''}
              />
              <ButtonAction
                state="primary"
                type="submit"
                onClick={() => {}}
              >
                GO
              </ButtonAction>
              <ButtonAction
                state="secondary"
                type="button"
                onClick={() => setIsVisibleFormEmail(false)}
              >
                CANCEL
              </ButtonAction>
            </form>
          </FormProvider>
        </StyledFormContainer>
        <StyledActions>
          <div
            className="container"
            style={{ display: isVisibleFormEmail ? 'none' : 'flex' }}
          >
            <div className="buttonContainer">
              <ButtonAction
                onClick={accessEmailClickHandler}
                state="secondary"
              >
                ACCESS WITH EMAIL
              </ButtonAction>
            </div>
            <div className="buttonContainer">
              <ButtonAction
                onClick={loginHandler}
                state="primary"
              >
                LOGIN
              </ButtonAction>
            </div>
          </div>
        </StyledActions>
      </StyledHome>

    </ThemeProvider>
  );
};

export { Home };
