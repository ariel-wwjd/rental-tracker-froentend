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
import {
  StyledLogo, StyledFormContainer, StyledActions, StyledHome,
} from './style';

const Home = () => {
  const [isVisibleFormEmail, setIsVisibleFormEmail] = useState(false);
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(themeSelector);
  const history = useHistory();
  const user = useAppSelector(userSelector);

  useEffect(() => {
    if (user.email) {
      history.push('/users');
    }
  }, []);

  const validateAuthUser = async () => {
    try {
      await dispatch(userGoogleLogin());
      history.push('/users');
    } catch (error) {
      console.log({ error });
    }
  };

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
    let timer: NodeJS.Timeout | null = null;
    const googleLoginURL = process.env.REACT_APP_GOOGLE_LOGIN_URL;
    const newWindow = window.open(googleLoginURL, '_blank', 'width=500,height=600');
    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          validateAuthUser();
          if (timer) {
            clearInterval(timer);
          }
        }
      }, 500);
    }
  };

  const messageCloseHandler = () => {
    console.log('CLOSE MESSAGE');
  };

  const navbarItems = [{
    label: theme,
    key: 'themeMode',
    onClick: () => { dispatch(changeTheme()); },
  }];

  return (
    <ThemeProvider theme={theme === 'Light Mode' ? darkTheme : lightTheme}>
      <StyledHome>
        <Message timeToClose={5000} onClose={messageCloseHandler} message="Test for the message component" />
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
