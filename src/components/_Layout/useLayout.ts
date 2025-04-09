import { TFunction } from 'i18next';
import { useAtomValue } from 'jotai';
import { useTranslation } from 'react-i18next';
import { pageTitleAtom } from 'store/store';
import packageInfo from '../../../package.json';

interface UseLayoutReturn {
  t: TFunction<'global', undefined>;
  language: string;
  pageTitle: string;
  version: string;
}

export const useLayout = (): UseLayoutReturn => {
  const { t, i18n } = useTranslation('global');
  const pageTitle = useAtomValue(pageTitleAtom);

  // set language attribute to html
  document.documentElement.lang = i18n.language;

  return {
    t,
    language: i18n.language,
    pageTitle,
    version: packageInfo.version
  };
};
