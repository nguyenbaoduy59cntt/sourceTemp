import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ToggleButton = ({
  isNavbarVerticalCollapsed,
  setIsNavbarVerticalCollapsed
}) => {
  const handleClick = () => {
    document
      .getElementsByTagName('html')[0]
      .classList.toggle('navbar-vertical-collapsed');
    setIsNavbarVerticalCollapsed(!isNavbarVerticalCollapsed);
  };

  return (
    <div className="toggle-icon-wrapper">
      <Button
        variant="link"
        className="navbar-toggler-humburger-icon navbar-vertical-toggle"
        id="toggleNavigationTooltip"
        onClick={handleClick}
      >
        <span className="navbar-toggle-icon">
          <span className="toggle-line" />
        </span>
      </Button>
    </div>
  );
};

export default ToggleButton;
