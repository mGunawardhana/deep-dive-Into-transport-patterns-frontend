import React, { useState, useEffect } from 'react';
import ChartOne from '../dashboard/components/ChartOne';
import { fetchAllAnalyzedDataByDay } from '../../service/service';
import { toast } from 'react-toastify';
import DashboardCard from '../../components/shared/DashboardCard';

const App = () => {
  const [chartData, setChartData] = useState({ Day: [], Frequency: [] });

  useEffect(() => {
    fetchAllAnalyzedDataFunc().then(() => {console.log("Fetched data")} );
  }, []);

  const fetchAllAnalyzedDataFunc = async () => {
    try {
      const response = await fetchAllAnalyzedDataByDay();
      console.log("Fetched data:", response);
      setChartData(response);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Error fetching data');
    }
  };

  const base64String = chartData.image_data || '';

  return (
    <DashboardCard>
      <ChartOne base64String={base64String} />
    </DashboardCard>
  );
};

export default App;
