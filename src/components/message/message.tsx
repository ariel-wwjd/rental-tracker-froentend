import { StyledMessage } from './style';

interface IMessage {
  type?: 'success' | 'error' | 'warning' | undefined;
  message: string | undefined;
  timeToClose?: number | undefined;
  onClose(): void;
}

const Message = ({
  type, message, timeToClose, onClose,
} : IMessage) => {
  if (timeToClose !== undefined && timeToClose < 1000) {
    onClose();
  }

  return (
    <StyledMessage
      type={type}
    >
      <div className="message-container">
        <div className="message">{message}</div>
      </div>
      <button type="button" onClick={onClose}>X</button>
    </StyledMessage>
  );
};

Message.defaultProps = {
  type: undefined,
  timeToClose: undefined,
};

export { Message };
