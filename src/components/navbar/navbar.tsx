import { useTranslation } from 'react-i18next';
import { Avatar } from '../avatar';
import { NavbarItem } from '../navbarItem';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { appSetupSelector, changeTheme, changeLanguage } from '../../store/appSetup/slice';
import { StyledNavbarContainer, StyledNavbar } from './style';

interface IItem {
    label: string;
    key: string;
    onClick(): void;
}

interface INavbar {
  items?: IItem[];
  firstName?: string;
  lastName?: string;
  userPicture?: string;
}

const Navbar = ({
  items, firstName, lastName, userPicture,
}:INavbar) => {
  const { theme, language } = useAppSelector(appSetupSelector);
  const [, i18n] = useTranslation();
  const dispatch = useAppDispatch();

  const commonNavbarItems = [
    {
      label: language,
      key: 'languageMode',
      onClick: () => {
        i18n.changeLanguage(language);
        dispatch(changeLanguage());
      },
    },
    {
      label: theme,
      key: 'themeMode',
      onClick: () => { dispatch(changeTheme()); },
    },
  ];

  const allItems = items ? [...commonNavbarItems, ...items] : commonNavbarItems;

  const itemsNavbar = allItems.map((item) => (
    <NavbarItem label={item.label} onClick={item.onClick} key={item.key} />
  ));

  return (
    <StyledNavbar>
      <StyledNavbarContainer>
        {firstName
          ? <Avatar firstName={firstName} lastName={lastName} picture={userPicture} />
          : <div />}
      </StyledNavbarContainer>
      <StyledNavbarContainer>
        {itemsNavbar}
      </StyledNavbarContainer>
    </StyledNavbar>
  );
};

Navbar.defaultProps = {
  firstName: '',
  lastName: '',
  userPicture: '',
  items: [],
};

export { Navbar };
