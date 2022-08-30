import i18next from 'i18next';
import homeEs from './translations/es/home.json';
import homeEn from './translations/en/home.json';
import userEs from './translations/es/user.json';
import userEn from './translations/en/user.json';
import clientCardEs from './translations/es/clientCard.json';
import clientCardEn from './translations/en/clientCard.json';

const multiLanguageInit = () => {
  i18next.init({
    interpolation: { escapeValue: false },
    lng: 'Español',
    resources: {
      Español: {
        home: homeEs,
        user: userEs,
        clientCard: clientCardEs,
      },
      English: {
        home: homeEn,
        user: userEn,
        clientCard: clientCardEn,
      },
    },
  });
};

export { multiLanguageInit };
