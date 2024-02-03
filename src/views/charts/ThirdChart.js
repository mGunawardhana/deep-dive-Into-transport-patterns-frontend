import React, { useState, useEffect } from 'react';
import ChartThree from '../dashboard/components/ChartThree';
import DashboardCard from '../../components/shared/DashboardCard';
import { fetchAllAnalyzedDataByDay } from '../../service/service';

const ThirdChart = () => {
  const [chartData, setChartData] = useState({ Day: [], Frequency: [] });

  useEffect(() => {
    fetchChartDataFunc().then(() => {
      console.log('Fetched data');
    });
  }, []);

  const fetchChartDataFunc = async () => {
    try {
      const response = await fetchAllAnalyzedDataByDay();
      setChartData(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const base64String = chartData.image_data || '';

  return (
    <DashboardCard>
      <ChartThree base64String={base64String} />
    </DashboardCard>
  );
};

export default ThirdChart;
