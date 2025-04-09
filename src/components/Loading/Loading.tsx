import classNames from 'classnames';
import { JSX } from 'react';
import styles from './loading.module.scss';

interface LoadingProps {
  height?: number;
  message?: string;
  extensionClass?: string;
}

const Loading = ({ height = 50, message, extensionClass }: LoadingProps): JSX.Element => {
  const loadingClasses = classNames(styles.bLoading, extensionClass);

  return (
    <article className={loadingClasses}>
      <svg
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        height={height}
        aria-label="Loading">
        <circle
          className={styles.svgPath}
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="8"/>
      </svg>
      {message &&
        <p className={styles.message}>{message}</p>}
    </article>
  );
};

export default Loading;
