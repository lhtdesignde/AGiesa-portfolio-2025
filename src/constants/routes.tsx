import Layout from 'components/_Layout/Layout';
import ErrorPage from 'components/ErrorPage/ErrorPage';
import { createBrowserRouter } from 'react-router';
import { ROUTE_PATHS } from './paths';

export const ROUTES = createBrowserRouter([
  {
    path: ROUTE_PATHS.home,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTE_PATHS.home,
        index: true,
        element: <p>Page component</p>
      }
    ]
  }
]);
