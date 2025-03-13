import NavbarVertical from 'components/navbar/vertical/NavbarVertical';
import React from 'react';
import VerticalLayoutNavbarTop from 'components/navbar/top/VerticalLayoutNavbarTop';
import { Outlet } from 'react-router-dom';

const VerticalNavLayout = () => {
  return (
    <div className="container">
      <NavbarVertical />
      <div className="content">
        <VerticalLayoutNavbarTop />
        <Outlet />
      </div>
    </div>
  );
};

export default VerticalNavLayout;
