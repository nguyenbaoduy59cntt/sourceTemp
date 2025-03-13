import PropTypes from 'prop-types';
import React from 'react';
import ReactEchart from './ReactEchart';

// Định nghĩa cấu hình cố định trực tiếp trong component
const BasicECharts = ({ echarts, ...rest }) => {
  const chartOptions = {
    color: '#007bff', // Màu cố định cho biểu đồ (thay cho getThemeColor('primary'))
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'none'
      },
      padding: [7, 10],
      backgroundColor: '#f8f9fa', // Màu nền tooltip cố định (thay cho getThemeColor('gray-100'))
      borderColor: '#f8f9fa', // Màu viền tooltip cố định
      textStyle: { color: '#212529' }, // Màu chữ tooltip cố định (thay cho getThemeColor('gray-1100'))
      borderWidth: 1,
      transitionDuration: 0
    },
    xAxis: {
      type: 'category',
      show: false,
      boundaryGap: false
    },
    yAxis: {
      show: false,
      type: 'value',
      boundaryGap: false
    },
    series: [
      {
        type: 'bar',
        symbol: 'none'
      }
    ],
    grid: { right: '0', left: '0', bottom: '0', top: '0' }
  };

  return (
    <ReactEchart
      echarts={echarts}
      option={chartOptions} // Sử dụng cấu hình cố định
      {...rest}
    />
  );
};

BasicECharts.propTypes = {
  echarts: PropTypes.object.isRequired
};

export default BasicECharts;