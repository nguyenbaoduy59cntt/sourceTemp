import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Chart as ChartJS, registerables } from 'chart.js';
import { CloseButton } from 'components/common/Toast';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';

ChartJS.register(...registerables);

const App = () => {
  return (
    <>
      <Outlet />
      <ToastContainer
        closeButton={CloseButton}
        icon={false}
        position="top-right"
      />
    </>
  );
};

export default App;
