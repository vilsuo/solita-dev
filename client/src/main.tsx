import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import "./index.css"

import ErrorPage from './pages/ErrorPage.tsx';

// pages
import Stations, { loader as stationsLoader } from './pages/Stations.tsx';
import Station, { loader as stationLoader } from './pages/Station.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Stations />,
    loader: stationsLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/stations/:id",
    loader: stationLoader,
    element: <Station />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
