/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { ButtonAction } from '../../components/buttonAction';
import { InputText } from '../../components/inputText';
import { formValues } from '../../components/types/formTypes';
import { userGoogleLogin } from '../../store/user/actions';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import './home.css';

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
    <div className="homeView">
      <div className="logo">KUENTAS</div>
      <div
        className="formContainer"
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
              label="GO"
              color="orange"
              type="submit"
              onClick={() => {}}
            />
            <ButtonAction
              label="CANCEL"
              color="blue"
              type="button"
              onClick={() => setIsVisibleFormCode(false)}
            />
          </form>
        </FormProvider>
      </div>
      <div className="actions">
        <div
          className="container"
          style={{ display: isVisibleFormCode ? 'none' : 'flex' }}
        >
          <ButtonAction
            label="ACCESS CODE"
            onClick={accessCodeClickHandler}
            color="black"
          />
          <ButtonAction
            label="LOGIN"
            onClick={loginHandler}
            color="blue"
          />
        </div>
      </div>
    </div>
  );
};

export { Home };
