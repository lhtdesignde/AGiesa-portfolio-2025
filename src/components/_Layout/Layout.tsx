import { ErrorLayout } from 'components/ErrorPage/ErrorPage';
import { JSX } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { IntlProvider } from 'react-intl';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Toast from '../Toast/Toast';
import styles from './layout.module.scss';
import { useLayout } from './useLayout';

interface LayoutProps {
  ErrorElement?: JSX.Element;
}

const Layout = ({ ErrorElement }: LayoutProps): JSX.Element => {
  const {
    t,
    language,
    pageTitle,
    version
  } = useLayout();
  
  return (
    <IntlProvider locale={language}>
      <title>{`${pageTitle} | ${t('pageTitle')} ${t('pageTitleSub')}`}</title>
      <meta name='version' content={version}/>
      <ErrorBoundary fallback={<ErrorLayout />}>
        <Header />
      </ErrorBoundary>
      <main className={styles.bLayout}>
        <Outlet />
        {ErrorElement}
        <Toast />
      </main>
    </IntlProvider>
  );
};

export default Layout;
