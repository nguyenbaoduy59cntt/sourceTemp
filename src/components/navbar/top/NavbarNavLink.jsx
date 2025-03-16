import React from 'react';
import { Nav } from 'react-bootstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const NavbarNavLink = ({ title, route }) => {
  return (
    <Nav.Link
      as={title ? 'p' : Link}
      className={classNames('fw-medium', {
        'text-500': !route?.active,
        'text-700 mb-0 fw-bold': title,
        'py-1': !title,
        'link-600': !title && route?.active
      })}
      to={route?.to}
      target={route?.newtab && '_blank'}
    >
      {title ? title : route.name}
    </Nav.Link>
  );
};
export default NavbarNavLink;
