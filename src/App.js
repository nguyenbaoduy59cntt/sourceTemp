import React from 'react';
import { Outlet } from 'react-router-dom';
import { Chart as ChartJS, registerables } from 'chart.js';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';

ChartJS.register(...registerables);

const App = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
