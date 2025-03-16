import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import classNames from 'classnames';
import Logo from 'components/common/Logo';
import TopNavRightSideNavItem from './TopNavRightSideNavItem';

const NavbarTop = () => {
  const [navbarPosition] = useState('vertical');
  const [navbarCollapsed] = useState(true);
  const [showDropShadow, setShowDropShadow] = useState(false);

  const setDropShadow = () => {
    const el = document.documentElement;
    if (el.scrollTop > 0) {
      setShowDropShadow(true);
    } else {
      setShowDropShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', setDropShadow);
    return () => window.removeEventListener('scroll', setDropShadow);
  }, []);

  const burgerMenuRef = useRef();

  return (
    <Navbar
      className={classNames('navbar-glass fs-10 navbar-top sticky-kit', {
        'navbar-glass-shadow': showDropShadow
      })}
      expand="true"
    >
      <NavbarTopElements
        navbarCollapsed={navbarCollapsed}
        navbarPosition={navbarPosition}
        burgerMenuRef={burgerMenuRef}
      />
    </Navbar>
  );
};

const NavbarTopElements = ({ navbarPosition, navbarCollapsed }) => {
  const burgerMenuRef = useRef();
  return (
    <>
      <Logo at="navbar-top" textClass="text-primary" width={40} id="topLogo" />

      {navbarPosition === 'top' || navbarPosition === 'combo' ? (
        <Navbar.Collapse
          in={navbarCollapsed}
          className="scrollbar pb-3 pb-lg-0"
        >
          <Nav navbar></Nav>
        </Navbar.Collapse>
      ) : (
        <Nav navbar className={`align-items-center d-none d-lg-block`} as="ul">
          <Nav.Item as="li"></Nav.Item>
        </Nav>
      )}
      <TopNavRightSideNavItem />
    </>
  );
};

export default NavbarTop;
