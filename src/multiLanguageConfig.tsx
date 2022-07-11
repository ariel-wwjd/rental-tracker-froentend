import i18next from 'i18next';
import homeEs from './translations/es/home.json';
import homeEn from './translations/en/home.json';
import userEs from './translations/es/user.json';
import userEn from './translations/en/user.json';

const multiLanguageInit = () => {
  i18next.init({
    interpolation: { escapeValue: false },
    lng: 'Español',
    resources: {
      Español: {
        home: homeEs,
        user: userEs,
      },
      English: {
        home: homeEn,
        user: userEn,
      },
    },
  });
};

export { multiLanguageInit };
