/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { ThemeProvider } from 'styled-components';
import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useTranslation } from 'react-i18next';
import { ButtonAction } from '../../components/buttonAction';
import { InputText } from '../../components/inputText';
import { formValues } from '../../components/types/formTypes';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { appSetupSelector } from '../../store/appSetup/slice';
import { userSelector } from '../../store/user/slice';
import { lightTheme } from '../../themes/light';
import { darkTheme } from '../../themes/dark';
import { Navbar } from '../../components/navbar';
import { Message } from '../../components/message';
import { closeMessage, createMessage, messageSelector } from '../../store/message/slice';
import { userReview } from '../../store/user/actions';
import { userGoogle } from '../../components/types/googleTypes';
import {
  StyledLogo, StyledFormContainer, StyledActions, StyledHome,
} from './style';

export declare const google: {
  accounts: {
    id: {
      initialize: (arg0: {
        client_id: string | undefined; callback: (response: any) => void;
      }) => void;
      renderButton(
        element: any,
        { theme, size }: {theme: string; size: string}): React.ReactNode;
    };
    };
  };

const Home = () => {
  const [isVisibleFormEmail, setIsVisibleFormEmail] = useState(false);
  const dispatch = useAppDispatch();
  const [textFor] = useTranslation('home');
  const { theme } = useAppSelector(appSetupSelector);
  const history = useHistory();
  const userSelectorData = useAppSelector(userSelector);
  const { user } = userSelectorData;
  const { message, type } = useAppSelector(messageSelector);

  const googleButtonTheme = theme === 'Light Mode' ? 'filled_black' : 'outline';

  useEffect(() => {
    if (user.email !== '') {
      history.push('/users');
    }
  }, [user]);

  const handleCallbackResponse = (response: any) => {
    try {
      const responseFromGoogle = jwtDecode(response.credential) as userGoogle;
      const userFromGoogle = {
        firstName: responseFromGoogle.family_name,
        lastName: responseFromGoogle.given_name,
        email: responseFromGoogle.email,
        image: responseFromGoogle.picture,
        googleAccountId: responseFromGoogle.sub,
      };

      dispatch(userReview(userFromGoogle));
    } catch (error) {
      dispatch(createMessage({
        message: `Can not login please make sure you are online or try again later
        Internal Error: ${error}`,
        type: 'error',
      }));
    }
  };

  const renderGoogleButton = () => {
    if (google.accounts.id.renderButton) {
      google.accounts.id.renderButton(
        document.getElementById('signInGoogle'),
        {
          theme: googleButtonTheme,
          size: 'large',
        },
      );
    }
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    renderGoogleButton();
  }, []);

  useEffect(() => {
    renderGoogleButton();
  }, [theme]);

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
      <StyledHome>
        {message && (
          <Message
            onClose={messageCloseHandler}
            message={message}
            type={getType()}
          />
        )}
        <Navbar />
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
                {textFor('emailAccessButton')}
              </ButtonAction>
              <ButtonAction
                state="secondary"
                type="button"
                onClick={() => setIsVisibleFormEmail(false)}
              >
                {textFor('emailCancelButton')}
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
                {/* ACCESS WITH EMAIL */}
                {textFor('accessWithEmailButton')}
              </ButtonAction>
            </div>
            <div className="buttonContainer">
              <div id="signInGoogle" />
            </div>
          </div>
        </StyledActions>
      </StyledHome>

    </ThemeProvider>
  );
};

export { Home };
