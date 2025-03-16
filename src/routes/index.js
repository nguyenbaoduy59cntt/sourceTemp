import React from 'react';
import App from 'App';
import paths from './paths';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Dashboard from 'components/dashboards/default';

const routes = [
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />
          }
        ]
      },
      {
        path: '*',
        element: <Navigate to={paths.error404} replace />
      }
    ]
  }
];

export const router = createBrowserRouter(routes, {
  basename: process.env.PUBLIC_URL
});

export default routes;
