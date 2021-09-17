import { ButtonAction } from '../../components/buttonAction';
import './home.css';

const Home = () => {
  const accessCodeClickHandler = () => {};

  return (
    <div className="homeView">
      <div className="logo">KUENTAS</div>
      <div className="form">FORM</div>
      <div className="actions">
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
  );
};

export { Home };
