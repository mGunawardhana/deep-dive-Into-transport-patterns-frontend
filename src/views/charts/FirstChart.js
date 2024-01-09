import React from 'react';
// import Chart from 'chart.js/auto';
import DashboardCard from '../../components/shared/DashboardCard';
import ChartOne from '../dashboard/components/ChartOne';

const FirstChart = () => {
  return (
    <div>
      <DashboardCard>
        <ChartOne/>
      </DashboardCard>
    </div>
  );
};

export default FirstChart;
