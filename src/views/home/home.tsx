/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { ThemeProvider } from 'styled-components';
import { ButtonAction } from '../../components/buttonAction';
import { InputText } from '../../components/inputText';
import { formValues } from '../../components/types/formTypes';
import { userGoogleLogin } from '../../store/user/actions';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { lightTheme } from '../../themes/light';
import { darkTheme } from '../../themes/dark';
import {
  StyledLogo, StyledFormContainer, StyledActions, StyledHome,
} from './style';

const Home = () => {
  const [isVisibleFormCode, setIsVisibleFormCode] = useState(false);
  const dispatch = useAppDispatch();

  const validateAuthUser = async () => {
    dispatch(userGoogleLogin());
  };

  const accessCodeClickHandler = () => {
    setIsVisibleFormCode(true);
  };

  const initialFormValues = {
    code: '',
  };

  const methods = useForm<formValues>({
    defaultValues: initialFormValues,
  });
  const { errors } = methods.formState;

  const onSubmit = (data: any) => {
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

  return (
    <ThemeProvider theme={lightTheme}>
      <StyledHome>
        <StyledLogo>KUENTAS</StyledLogo>
        <StyledFormContainer
          style={{ display: isVisibleFormCode ? 'block' : 'none' }}
        >
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="form"
            >
              <InputText
                name="code"
                placeholder="Code"
                type="text"
                id="code"
                required={{ value: true, message: 'Code is empty' }}
                maxLength={{ value: 4, message: 'at least 4 digits' }}
                error={errors.code?.message || ''}
              />
              <ButtonAction
                state="primary"
                type="submit"
                onClick={() => {}}
              >
                GO
              </ButtonAction>
              <ButtonAction
                state="primary"
                type="button"
                onClick={() => setIsVisibleFormCode(false)}
              >
                CANCEL
              </ButtonAction>
            </form>
          </FormProvider>
        </StyledFormContainer>
        <StyledActions>
          <div
            className="container"
            style={{ display: isVisibleFormCode ? 'none' : 'flex' }}
          >
            <div className="buttonContainer">
              <ButtonAction
                onClick={accessCodeClickHandler}
                state="secondary"
              >
                ACCESS CODE
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
