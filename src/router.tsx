import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import PlayPage from 'pages/PlayPage';
import Result from 'pages/Result';

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
    element: <Result />,
  },
]);

const Provider = () => <RouterProvider router={router} />;

export default Provider;
