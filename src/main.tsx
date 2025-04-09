import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import i18next from 'i18next';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import Modal from 'react-modal';
import { RouterProvider } from 'react-router/dom';
import { ROUTES } from 'constants/routes';
import './assets/config/i18n';
import './assets/styles/basics.scss';

const root = createRoot(
  document.getElementById('root') as HTMLElement,
  {
    // log uncaught errors that got around error boundary
    onUncaughtError: (error: unknown, errorInfo) => {
      // this could log to newrelic or sentry
      // eslint-disable-next-line no-console
      console.error(error, errorInfo);
    }
  }
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 1
    }
  }
});

Modal.setAppElement('#root');
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18next}>
        <RouterProvider router={ROUTES} />
      </I18nextProvider>
    </QueryClientProvider>
  </StrictMode>
);
