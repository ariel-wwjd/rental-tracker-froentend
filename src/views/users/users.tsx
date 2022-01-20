import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Navbar } from '../../components/navbar';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { changeTheme, themeSelector } from '../../store/theme/slice';
import { userSelector } from '../../store/user/slice';
import { darkTheme } from '../../themes/dark';
import { lightTheme } from '../../themes/light';
import { StyledUsers } from './style';

const Users = () => {
  const { theme } = useAppSelector(themeSelector);
  const { firstName, picture, email } = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!email) {
      history.push('/');
    }
  }, []);

  const navbarItems = [{
    label: theme,
    key: 'themeMode',
    onClick: () => { dispatch(changeTheme()); },
  }];

  return (
    <ThemeProvider theme={theme === 'Light Mode' ? darkTheme : lightTheme}>
      <StyledUsers>
        <Navbar items={navbarItems} userName={firstName} userPicture={picture} />
      </StyledUsers>
    </ThemeProvider>
  );
};

export { Users };
