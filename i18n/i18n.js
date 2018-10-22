import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

// individual language translation file
import loadFr from './fr';
import loadEn from './en';

i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    resources: {
      en: loadEn(),
      fr: loadFr(),
    },
    fallbackLng: 'en',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      wait: true,
    },
  });

export default i18n;
