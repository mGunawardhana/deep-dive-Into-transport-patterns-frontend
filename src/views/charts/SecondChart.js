import React, { useEffect, useState } from 'react';
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

    fetchData().then((r) => console.log(''));
  }, []);

  return (<DashboardCard>
      <ChartTwo base64String={base64String} />
      <div style={{ width: '800px' }}>
        <h6>🌎 This chart shows the distribution of Uber trips across different hours of the day. The x-axis represents
          the hour of the day and the y-axis represents the number of trips. The height of the bars indicates the number
          of trips made on that particular hour.</h6>
      </div>
    </DashboardCard>);
};

export default SecondChart;
