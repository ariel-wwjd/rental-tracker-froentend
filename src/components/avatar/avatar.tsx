import { StyledAvatar } from './style';

interface IAvatar {
  name: string | undefined;
  picture: string | undefined;
}

const Avatar = ({ name, picture }: IAvatar) => (
  <StyledAvatar>
    <img src={picture} alt="" />
    <span>{name}</span>
  </StyledAvatar>
);

export { Avatar };
