import { StyledAvatar } from './style';

interface IAvatar {
  firstName: string | undefined;
  lastName: string | undefined;
  picture: string | undefined;
  showName?: boolean;
}

const Avatar = ({
  firstName, lastName, picture, showName,
}: IAvatar) => (
  <StyledAvatar>
    {picture ? <img src={picture} alt="" /> : (
      <p>
        {firstName && firstName.charAt(0)}
        {lastName && lastName.charAt(0)}
      </p>
    )}
    {showName && (
      <span>
        {firstName}
        {' '}
        {lastName}
      </span>
    )}
  </StyledAvatar>
);

Avatar.defaultProps = {
  showName: true,
};

export { Avatar };
