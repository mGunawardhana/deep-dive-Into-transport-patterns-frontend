import React, { useState, useEffect } from 'react';
import DashboardCard from '../../components/shared/DashboardCard';
import ChartTwo from '../dashboard/components/ChartTwo';
import { FetchAllAnalyzedDataByHour } from '../../service/service';

const SecondChart = () => {
  const [base64String, setBase64String] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await FetchAllAnalyzedDataByHour();
        const fetchedBase64String = response.image_data || '';
        setBase64String(fetchedBase64String);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData().then(r =>(console.log("")));
  }, []);

  return (
    <DashboardCard>
      <ChartTwo base64String={base64String} />
    </DashboardCard>
  );
};

export default SecondChart;
