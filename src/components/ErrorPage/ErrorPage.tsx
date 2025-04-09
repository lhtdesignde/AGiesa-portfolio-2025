import { JSX } from 'react';
import Layout from '../_Layout/Layout';
import styles from './errorPage.module.scss';
import { useErrorPage } from './useErrorPage';

export const ErrorLayout = (): JSX.Element => {
  const { t, errorMessage } = useErrorPage();

  return (
    <article className={styles.bErrorPage}>
      <h1 className={styles.headline}>{t('errorPage.headline')}</h1>
      <p className={styles.description}>{t('errorPage.description')}</p>
      <em className={styles.error}>{errorMessage}</em>
    </article>
  );
};

const ErrorPage = (): JSX.Element => (
  <Layout ErrorElement={<ErrorLayout />}/>
);

export default ErrorPage;
