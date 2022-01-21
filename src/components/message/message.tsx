import { useState } from 'react';
import { StyledMessage } from './style';

interface IMessage {
  type?: 'success' | 'error' | 'warning' | undefined;
  message: string;
  timeToClose?: number;
  onClose(): void;
}

const Message = ({
  type, message, timeToClose, onClose,
} : IMessage) => {
  const [timer, setTimer] = useState(timeToClose);

  if (timer && timer >= 1000) {
    setTimeout(() => {
      setTimer(timer - 1000);
    }, 1000);
  } else {
    onClose();
  }

  return (
    <StyledMessage
      type={type}
    >
      <button type="button" onClick={onClose}>X</button>
      <div className="message">{message}</div>
      {timer
        ? <div className="counter">{`Close in: ${timer / 1000} seconds`}</div>
        : <div className="counter" />}
    </StyledMessage>
  );
};

Message.defaultProps = {
  type: undefined,
  timeToClose: null,
};

export { Message };
