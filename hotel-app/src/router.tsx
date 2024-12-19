import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import HotelsList from './pages/HotelsList';
import HotelDetail from './pages/HotelDetail';

const router = createBrowserRouter([
  {
    path: '/hotels',
    element: <HotelsList />,
  },
  {
    path: '/hotels/:id',
    element: <HotelDetail />,
  },
  {
    path: '*',
    element: <Navigate to="/hotels" />,
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
