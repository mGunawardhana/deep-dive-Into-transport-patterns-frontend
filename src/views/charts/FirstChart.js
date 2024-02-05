import React, { useEffect, useState } from 'react';
import ChartOne from '../dashboard/components/ChartOne';
import { FetchAllAnalyzedDataByBubbleMap } from '../../service/service';
import { toast } from 'react-toastify';
import DashboardCard from '../../components/shared/DashboardCard';

const App = () => {
  const [chartData, setChartData] = useState({ Day: [], Frequency: [] });

  useEffect(() => {
    fetchAllAnalyzedDataFunc().then(() => {
      console.log('Fetched data');
    });
  }, []);

  const fetchAllAnalyzedDataFunc = async () => {
    try {
      const response = await FetchAllAnalyzedDataByBubbleMap();
      setChartData(response);
    } catch (error) {
      toast.error('Error fetching data');
    }
  };

  const base64String = chartData.image_data || '';

  return (<DashboardCard>
    <ChartOne base64String={base64String} />
    <div style={{ width: '800px' }}>
      <h6>🌎 This chart shows the geographical distribution of Uber trips with day-wise bubbles. The x-axis represents
        the longitude and the y-axis represents the latitude. The size and color of the bubbles indicate the day of
        the month.</h6>
    </div>
  </DashboardCard>);
};

export default App;
