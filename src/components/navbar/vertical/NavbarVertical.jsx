import React, { useEffect, Fragment } from 'react';
import { Nav, Navbar, Row, Col } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import Logo from 'components/common/Logo';
import NavbarVerticalMenu from './NavbarVerticalMenu';
import ToggleButton from './ToggleButton';
import routes from 'routes/siteMaps';

const NavbarVertical = () => {
  const [isNavbarVerticalCollapsed, setIsNavbarVerticalCollapsed] =
    React.useState(false);
  const HTMLClassList = document.getElementsByTagName('html')[0].classList;

  const capitalize = str =>
    (str.charAt(0).toUpperCase() + str.slice(1)).replace(/-/g, ' ');

  useEffect(() => {
    if (isNavbarVerticalCollapsed) {
      HTMLClassList.add('navbar-vertical-collapsed');
    } else {
      HTMLClassList.remove('navbar-vertical-collapsed');
    }
    return () => {
      HTMLClassList.remove('navbar-vertical-collapsed-hover');
    };
  }, [isNavbarVerticalCollapsed, HTMLClassList]);

  //Control mouseEnter event
  let time = null;
  const handleMouseEnter = () => {
    if (isNavbarVerticalCollapsed) {
      time = setTimeout(() => {
        HTMLClassList.add('navbar-vertical-collapsed-hover');
      }, 100);
    }
  };
  const handleMouseLeave = () => {
    clearTimeout(time);
    HTMLClassList.remove('navbar-vertical-collapsed-hover');
  };

  const NavbarLabel = ({ label }) => (
    <Nav.Item as="li">
      <Row className="mt-3 mb-2 navbar-vertical-label-wrapper">
        <Col xs="auto" className="navbar-vertical-label navbar-vertical-label">
          {label}
        </Col>
        <Col className="ps-0">
          <hr className="mb-0 navbar-vertical-divider"></hr>
        </Col>
      </Row>
    </Nav.Item>
  );

  return (
    <Navbar expand="sm" className={'navbar-vertical'} variant="light">
      <Flex alignItems="center">
        <ToggleButton
          isNavbarVerticalCollapsed={isNavbarVerticalCollapsed}
          setIsNavbarVerticalCollapsed={setIsNavbarVerticalCollapsed}
        />
        <Logo at="navbar-vertical" textClass="text-primary" width={40} />
      </Flex>
      <Navbar.Collapse
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundImage: 'none' }}
      >
        <div className="navbar-vertical-content scrollbar">
          <Nav className="flex-column" as="ul">
            {routes.map(route => (
              <Fragment key={route.label}>
                {!route.labelDisable && (
                  <NavbarLabel label={capitalize(route.label)} />
                )}
                <NavbarVerticalMenu routes={route.children} />
              </Fragment>
            ))}
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarVertical;
