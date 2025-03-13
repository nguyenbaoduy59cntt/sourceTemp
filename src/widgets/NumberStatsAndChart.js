import React from 'react';
import { Col, Row } from 'react-bootstrap';
import WidgetSectionTitle from './WidgetSectionTitle';
import WeeklySales from 'components/dashboards/default/WeeklySales';
import TotalOrder from 'components/dashboards/default/TotalOrder';
import MarketShare from 'components/dashboards/default/MarketShare';

import {
  marketShare,
  totalOrder,
  totalSales,
  weeklySalesData,
  storageStatus,
  topProducts
} from 'data/dashboard/default';

import StorageStatus from 'components/dashboards/default/StorageStatus';
import BandwidthSaved from 'components/dashboards/default/BandwidthSaved';
import TopProducts from 'components/dashboards/default/TopProducts';
import TotalSales from 'components/dashboards/default/TotalSales';

const NumberStatsAndChart = () => {
  return (
    <>
      <WidgetSectionTitle
        icon="percentage"
        title="Number Stats & Charts"
        subtitle="You can easily show your stats content by using these cards."
        transform="shrink-2"
        className="mb-4 mt-3"
      />
      <Row className="g-3 mb-3">
        <Col md={6} lg={4} xl={6} xxl={4}>
          <WeeklySales data={weeklySalesData} />
        </Col>
        <Col md={6} lg={4} xl={6} xxl={4}>
          <TotalOrder data={totalOrder} />
        </Col>
        <Col md={6} lg={4} xl={6} xxl={4}>
          <MarketShare data={marketShare} radius={['100%', '87%']} />
        </Col>
        <Col md={6} lg={4} xl={6} xxl={4}>
          <ProductShare />
        </Col>
        <Col lg={8} xl={12} xxl={8}>
          <StorageStatus className="h-lg-100" data={storageStatus} />
        </Col>
      </Row>
      <Row className="g-3 mb-3">
        <Col md={4}>
        </Col>
        <Col md={4}>
        </Col>
        <Col md={4}>
        </Col>
      </Row>
      <Row className="g-3 mb-3">
        <Col xxl={8}>
        </Col>
        <Col md={6} xxl={4}>
          <BandwidthSaved bodyClassName="mt-md-8 mt-xxl-0" />
        </Col>
        <Col md={6} xxl={4}>
        </Col>
        <Col xxl={8}>
          <div className="mb-3">
            <TopProducts data={topProducts} />
          </div>
          <div>
            <TotalSales data={totalSales} />
          </div>
        </Col>
      </Row>
      <Row className="g-3 mb-3">
        <Col xxl={8}>
        </Col>
        <Col md={6} xxl={4}>
        </Col>
        <Col md={6} xxl={4}>
        </Col>
        <Col xxl={8}>
        </Col>
      </Row>
      <Row className="g-3 mb-3">
        <Col xs={12} md={6} xxl={4}>
        </Col>
        <Col xs={12} md={6} xxl={{ span: 4, order: 1 }}>
        </Col>
        <Col xs={12} xxl={8}>
        </Col>
        <Col md={6} xxl={{ span: 4, order: 1 }}>
        </Col>
        <Col md={6} xxl={{ span: 4, order: 1 }}>
        </Col>
      </Row>
      <Row className="g-3 mb-3">
        <Col xxl={8}>
        </Col>
        <Col xxl={4} md={6}>
        </Col>
        <Col xxl={4} md={6}>
        </Col>
        <Col xxl={8}>
        </Col>
        <Col>
        </Col>
      </Row>
    </>
  );
};

export default NumberStatsAndChart;
