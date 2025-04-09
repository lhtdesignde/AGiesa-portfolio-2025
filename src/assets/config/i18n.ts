import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import global_en from '../translation/en/global.json';

i18next
  .use(LanguageDetector)
  .init({
    interpolation: { escapeValue: false },
    fallbackLng: 'en',
    supportedLngs: ['en'],
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie']
    },
    resources: {
      en: {
        global: global_en
      }
    }
  });

export default i18next;
