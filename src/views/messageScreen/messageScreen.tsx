import { useEffect, useState } from 'react';
import './messageScreen.css';

interface IMessageScreen {
  title: string,
  timer: number,
  callback(): void,
}

const MessageScreen = ({ title, timer, callback }: IMessageScreen) => {
  const [timeToClose, setTimeToClose] = useState(timer);

  const closeHandler = () => {
    callback();
    window.close();
  };

  useEffect(() => {
    setTimeout(() => {
      closeHandler();
    }, timer);
  });

  if (timeToClose >= 1000) {
    setTimeout(() => {
      setTimeToClose(timeToClose - 1000);
    }, 1000);
  }

  return (
    <div className="messageScreenView">
      <h2 className="title">{title}</h2>
      <span className="message">
        This window will close in
        {' '}
        {timeToClose / 1000}
        {' '}
        seconds.
      </span>
      <button type="button" onClick={() => closeHandler()} className="button">
        CLOSE
      </button>
    </div>
  );
};

export { MessageScreen };
