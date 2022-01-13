import { StyledNavbarItem } from './style';

interface INavbarItem {
  onClick(): void;
  label: string;
}

export const NavbarItem = ({ onClick, label } : INavbarItem) => {
  const clickHandler = () => {
    onClick();
  };

  return (
    <StyledNavbarItem onClick={clickHandler}>{label}</StyledNavbarItem>
  );
};
