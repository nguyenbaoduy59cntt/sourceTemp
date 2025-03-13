import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import WidgetSectionTitle from './WidgetSectionTitle';
import SharedFiles from 'components/dashboards/default/SharedFiles';
import { files } from 'data/dashboard/default';
import Experience from 'components/pages/user/Experience';
import experiences from 'data/experiences';

const TableWidgets = () => {
  return (
    <>
      <WidgetSectionTitle
        icon="list"
        title="Tables, Files, and Lists"
        r
        subtitle="Falcon's styled components are dedicatedly made for displaying your contents and lists."
        transform="shrink-2"
        className="mb-4 mt-6"
      />
      <div className="mb-3">
      </div>
      <div className="mb-3">
      </div>

      <Row className="g-3 mb-3">
        <Col lg={6}>
          <SharedFiles files={files} />
        </Col>
        <Col lg={6}>
          <Card className="h-100">
            <Card.Header className="bg-body-tertiary">
              <h5 className="mb-0">Experience</h5>
            </Card.Header>
            <Card.Body className="fs-10">
              {experiences.map((experience, index) => (
                <Experience
                  key={experience.id}
                  experience={experience}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col lg={7} xxl={8}>
        </Col>
        <Col lg={5} xxl={4}>
        </Col>
      </Row>

      <Row className="g-3 mb-3">
        <Col lg={8}>
        </Col>

        <Col lg={4}>
        </Col>
      </Row>

      <Row className="g-3 mb-3">
        <Col xxl={8}>
        </Col>

        <Col xxl={4}>
        </Col>
      </Row>

      <Row className="g-3 mb-3">
        <Col md={6} xxl={5}>
        </Col>
        <Col md={6} xxl={7}>
        </Col>
      </Row>
    </>
  );
};

export default TableWidgets;
