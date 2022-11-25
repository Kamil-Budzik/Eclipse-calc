import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from 'pages/index';
import PlayPage from 'pages/PlayPage';

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
    element: <PlayPage />,
  },
  {
    path: RoutePaths.RESULTS,
    element: <h1>RESULTS PAGE</h1>,
  },
]);

const Provider = () => <RouterProvider router={router} />;

export default Provider;
