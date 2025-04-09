import { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './header.module.scss';

const Header = (): JSX.Element => {
  const { t } = useTranslation('global');
  const pageTitle = `${t('pageTitle')} ${t('pageTitleSub')}`;

  return (
    <header className={styles.bHeader}>
      <h1 className={styles.logo} aria-label={pageTitle}>
        <span className={styles.text}>{t('pageTitleSub')}</span>
      </h1>
    </header>
  );
};

export default Header;
