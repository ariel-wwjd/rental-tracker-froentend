import { NavbarItem } from '../navbarItem';
import { StyledNavbar } from './style';

interface IItem {
    label: string;
    key: string;
    onClick(): void;
}

interface INavbar {
  items: IItem[];
}

export const Navbar = ({ items }:INavbar) => {
  const itemsNavbar = items.map((item) => (
    <NavbarItem label={item.label} onClick={item.onClick} key={item.key} />
  ));

  return (
    <StyledNavbar>
      {itemsNavbar}
    </StyledNavbar>
  );
};
