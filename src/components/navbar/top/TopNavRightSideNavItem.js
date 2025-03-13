import React from 'react';
import ProfileDropdown from 'components/navbar/top/ProfileDropdown';
import { Nav } from 'react-bootstrap';
import ThemeControlDropdown from './ThemeControlDropdown';

const TopNavRightSideNavItem = () => {
  return (
    <Nav
      navbar
      className="navbar-nav-icons ms-auto flex-row align-items-center"
      as="ul"
    >
      <ThemeControlDropdown />
      <ProfileDropdown />
    </Nav>
  );
};

export default TopNavRightSideNavItem;
