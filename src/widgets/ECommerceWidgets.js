import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import WidgetSectionTitle from './WidgetSectionTitle';

const ECommerceWidgets = () => {
  return (
    <>
      <WidgetSectionTitle
        icon="cart-plus"
        title="E-commerce"
        subtitle="Find more cards which are dedicatedly made for E-commerce."
        transform="shrink-4"
        className="mb-4 mt-6"
      />

      <Row className="g-3 mb-3">
        <Col xs={12}>
        </Col>
        <Col lg={6}>
          <Card className="h-100">
            <Card.Header>
              <h5 className="mb-0">Billing</h5>
            </Card.Header>
            <Card.Body className="bg-body-tertiary">
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
        </Col>
        <Col>
        </Col>
      </Row>
    </>
  );
};

export default ECommerceWidgets;
