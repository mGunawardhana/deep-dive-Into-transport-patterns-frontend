import React, { useEffect, useState } from 'react';
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

  return (<DashboardCard>
      <ChartThree base64String={base64String} />
      <div style={{ width: '800px' }}>
        <h6>🌎 This chart shows the distribution of Uber trips across different weekdays. The x-axis represents the
          days of month and the y-axis represents the number of trips. The height of the bars
          indicates the number of trips made on that particular day.</h6>
      </div>
    </DashboardCard>);
};

export default ThirdChart;
