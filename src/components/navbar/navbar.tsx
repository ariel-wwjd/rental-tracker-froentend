import { Avatar } from '../avatar';
import { NavbarItem } from '../navbarItem';
import { StyledNavbar } from './style';

interface IItem {
    label: string;
    key: string;
    onClick(): void;
}

interface INavbar {
  items: IItem[];
  userName?: string;
  userPicture?: string;
}

const Navbar = ({ items, userName, userPicture }:INavbar) => {
  const itemsNavbar = items.map((item) => (
    <NavbarItem label={item.label} onClick={item.onClick} key={item.key} />
  ));

  return (
    <StyledNavbar>
      {userName ? <Avatar name={userName} picture={userPicture} /> : <div />}
      {itemsNavbar}
    </StyledNavbar>
  );
};

Navbar.defaultProps = {
  userName: '',
  userPicture: '',
};

export { Navbar };
