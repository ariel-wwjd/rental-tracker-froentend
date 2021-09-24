/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { ButtonAction } from '../../components/buttonAction';
import { InputText } from '../../components/inputText';
import { formValues } from '../../components/types/formTypes';
import './home.css';

const Home = () => {
  const [isVisibleFormCode, setIsVisibleFormCode] = useState(false);

  const accessCodeClickHandler = () => {
    setIsVisibleFormCode(true);
  };

  const initialFormValues = {
    code: '',
  };

  const methods = useForm<formValues>({ defaultValues: initialFormValues });
  const { errors } = methods.formState;

  const onSubmit = (data: any) => {
    // eslint-disable-next-line no-console
    console.log({ data });
  };
  return (
    <div className="homeView">
      <div className="logo">KUENTAS</div>
      <div className="formContainer" style={{ display: isVisibleFormCode ? 'block' : 'none' }}>
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
        <div className="container" style={{ display: isVisibleFormCode ? 'none' : 'flex' }}>
          <ButtonAction
            label="ACCESS CODE"
            onClick={accessCodeClickHandler}
            color="black"
          />
          <ButtonAction
            label="LOGIN WITH GOOGLE"
            onClick={accessCodeClickHandler}
            color="blue"
          />
        </div>
      </div>
    </div>
  );
};

export { Home };
