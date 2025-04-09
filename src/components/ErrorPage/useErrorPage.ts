import { TFunction } from 'i18next';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { isRouteErrorResponse, useRouteError } from 'react-router';

interface UseErrorPageReturn {
  t: TFunction<'global', undefined>;
  errorMessage: string;
}

export const useErrorPage = (): UseErrorPageReturn => {
  const { t } = useTranslation('global');
  const error = useRouteError();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isRouteErrorResponse(error)) {
      // error is type `ErrorResponse`
      setErrorMessage(error.data.message || error.statusText);
    } else if (error instanceof Error) {
      setErrorMessage(error.message);
    } else if (typeof error === 'string') {
      setErrorMessage(error);
    } else {
      // eslint-disable-next-line no-console
      console.error(error);
      setErrorMessage(t('errors.errorUnknown'));
    }
  }, [error, t]);

  return {
    t,
    errorMessage
  };
};
