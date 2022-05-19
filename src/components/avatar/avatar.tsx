import { StyledAvatar } from './style';

interface IAvatar {
  firstName: string | undefined;
  lastName: string | undefined;
  picture: string | undefined;
}

// eslint-disable-next-line no-unused-vars
const Avatar = ({ firstName, lastName, picture }: IAvatar) => (
  <StyledAvatar>
    {/* {picture ? <img src={picture} alt="" /> : ( */}
    <p>
      {firstName && firstName.charAt(0)}
      {lastName && lastName.charAt(0)}
    </p>
    {/* )} */}
    <span>
      {firstName}
      {' '}
      {lastName}
    </span>
  </StyledAvatar>
);

export { Avatar };
