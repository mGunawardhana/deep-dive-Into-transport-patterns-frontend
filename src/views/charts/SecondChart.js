import React, { useState, useEffect } from 'react';
import DashboardCard from '../../components/shared/DashboardCard';
import ChartTwo from '../dashboard/components/ChartTwo';
import { fetchAllAnalyzedDataByWeekDay } from '../../service/service';

const SecondChart = () => {
  const [base64String, setBase64String] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data or generate base64String as needed
        const response = await fetchAllAnalyzedDataByWeekDay(); // Replace with your data fetching logic
        const fetchedBase64String = response.image_data || '';
        setBase64String(fetchedBase64String);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error if needed
      }
    };

    fetchData().then(r =>(console.log(""))); // Invoke the fetchData function
  }, []);

  return (
    <DashboardCard>
      <ChartTwo base64String={base64String} />
    </DashboardCard>
  );
};

export default SecondChart;
