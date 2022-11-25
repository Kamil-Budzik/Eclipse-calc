import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from 'pages/index';

export enum RoutePaths {
  DEFAULT = '/',
  PLAY = '/play',
  RESULTS = '/results',
}

const router = createBrowserRouter([
  {
    path: RoutePaths.DEFAULT,
    element: <MainPage />,
  },
  {
    path: RoutePaths.PLAY,
    element: <h1>Play page</h1>,
  },
  {
    path: RoutePaths.RESULTS,
    element: <h1>RESULTS PAGE</h1>,
  },
]);

const Provider = () => <RouterProvider router={router} />;

export default Provider;
