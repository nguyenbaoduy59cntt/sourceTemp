import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import associations from 'data/associations';
import WidgetSectionTitle from './WidgetSectionTitle';
import ProfileBanner from 'components/pages/user/profile/Banner';
import Associations from 'components/pages/asscociations/Associations';
import InvitePeople from 'components/pages/miscellaneous/invite-people/InvitePeople';
import activities from 'data/activities';
import ActiveUsers from 'components/dashboards/default/ActiveUsers';
import { users } from 'data/dashboard/default';

const UsersWidgets = () => {
  return (
    <>
      <WidgetSectionTitle
        icon="user-friends"
        title="Users & Feed"
        transform="shrink-4"
        className="mb-4 mt-6"
      />

      <Row className="g-3 mb-3">
        <Col lg={6}>
        </Col>

        <Col lg={6}>
          <Card>
            <Card.Header className="bg-body-tertiary">
              <h5 className="mb-1 mb-md-0">Notifications</h5>
            </Card.Header>
          </Card>
        </Col>
      </Row>

      <Row className="g-3 mb-3">
        <Col lg={6}>
        </Col>
        <Col lg={6}>
          <Associations
            className="mb-3 h-100"
            associations={associations.slice(0, 8)}
            colBreakpoints={{ sm: 6 }}
          />
        </Col>
      </Row>
      <div className="mb-3">
        <InvitePeople />
      </div>

      <Row className="g-3 mb-3">
        <Col lg={8}>
          <Row className="align-items-stretch h-100">
            <Col className="mb-3">
            </Col>
            <Col className="">
            </Col>
          </Row>
        </Col>

        <Col lg={4}>
          <div className="mt-3">
          </div>
          <ActiveUsers users={users} end={7} />
        </Col>
      </Row>

      <ProfileBanner />
    </>
  );
};

export default UsersWidgets;
