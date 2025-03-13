import React from 'react';
import ProfileBanner from './Banner';
import ProfileIntro from './ProfileIntro';
import { Col, Row } from 'react-bootstrap';
import associations from 'data/associations';
import Associations from 'components/pages/asscociations/Associations';
import Experiences from './Experiences';
import Education from './Education';
import Photos from './Photos';

const Profile = () => {
  return (
    <>
      <ProfileBanner />
      <Row className="g-3 mb-3">
        <Col lg={8}>
          <ProfileIntro />
          <Associations
            associations={associations.slice(0, 4)}
            colBreakpoints={{ sm: 6 }}
          />
          <Photos />
        </Col>
        <Col lg={4}>
          <div className="sticky-sidebar">
            <Experiences />
            <Education />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
