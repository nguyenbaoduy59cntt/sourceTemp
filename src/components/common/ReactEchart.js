import React, { forwardRef, useEffect, useRef } from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';

const ReactEchart = forwardRef(({ ...rest }, ref) => {
  const chartRef = ref ? ref : useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.resize();
    }
  }, [false, false]);

  return <ReactEChartsCore ref={chartRef} {...rest} />;
});

export default ReactEchart;
