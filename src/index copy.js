import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from 'routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'helpers/initFA';

const loadStylesheets = () => {
  // Load theme.css
  const themeLink = document.createElement('link');
  themeLink.href = `${process.env.PUBLIC_URL}/css/theme.css`;
  themeLink.type = 'text/css';
  themeLink.rel = 'stylesheet';
  themeLink.className = 'theme-stylesheet';
  document.getElementsByTagName('head')[0].appendChild(themeLink);

  // Hardcode attribute fot <html>
  document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
  document.documentElement.setAttribute('data-bs-theme', 'light');
};

loadStylesheets();

const container = document.getElementById('main');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);