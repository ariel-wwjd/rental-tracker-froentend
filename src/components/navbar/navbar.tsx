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
  firstName?: string;
  lastName?: string;
  userPicture?: string;
}

const Navbar = ({
  items, firstName, lastName, userPicture,
}:INavbar) => {
  const itemsNavbar = items.map((item) => (
    <NavbarItem label={item.label} onClick={item.onClick} key={item.key} />
  ));

  return (
    <StyledNavbar>
      {firstName
        ? <Avatar firstName={firstName} lastName={lastName} picture={userPicture} />
        : <div />}
      {itemsNavbar}
    </StyledNavbar>
  );
};

Navbar.defaultProps = {
  firstName: '',
  lastName: '',
  userPicture: '',
};

export { Navbar };
