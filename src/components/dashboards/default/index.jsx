import React from 'react';
import { Row, Col } from 'react-bootstrap';

import WidgetComponent from './WidgetComponent';

const Dashboard = () => {
  return (
    <Row className="g-3">
      <Col xl={6}>
        <WidgetComponent />
      </Col>
      <Col xl={6}>
        <WidgetComponent />
      </Col>
      <Col xl={6}>
        <WidgetComponent />
      </Col>
      <Col xl={6}>
        <WidgetComponent />
      </Col>
      <Col xl={6}>
        <WidgetComponent />
      </Col>
      <Col xl={6}>
        <WidgetComponent />
      </Col>
    </Row>
  );
};

export default Dashboard;
