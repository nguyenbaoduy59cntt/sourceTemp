import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from 'routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'helpers/initFA';

// Hardcode giá trị
const isRTL = false;
const isDark = false;

const loadStylesheets = () => {
  Array.from(document.getElementsByClassName('theme-stylesheet')).forEach(
    link => link.remove()
  );

  const themeLink = document.createElement('link');
  themeLink.href = `${process.env.PUBLIC_URL}/css/theme.css`;
  themeLink.type = 'text/css';
  themeLink.rel = 'stylesheet';
  themeLink.className = 'theme-stylesheet';
  document.getElementsByTagName('head')[0].appendChild(themeLink);

  const userLink = document.createElement('link');
  userLink.href = `${process.env.PUBLIC_URL}/css/user${isRTL ? '.rtl' : ''}.css`;
  userLink.type = 'text/css';
  userLink.rel = 'stylesheet';
  userLink.className = 'theme-stylesheet';
  document.getElementsByTagName('head')[0].appendChild(userLink);

  document.getElementsByTagName('html')[0].setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
};

// Gọi trực tiếp khi khởi tạo
loadStylesheets();

const container = document.getElementById('main');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);