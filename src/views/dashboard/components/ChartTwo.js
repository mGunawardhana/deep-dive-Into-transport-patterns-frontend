import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { fetchAllAnalyzedData, getAllUsers } from '../../../service/service';
import { toast } from 'react-toastify';

const ChartTwo = () => {

    const [chartData, setChartData] = useState({ Day: [], Frequency: [] });

    const fetchAllAnalyzedDataFunc = async () => {
        try {
            const response = await fetchAllAnalyzedData();
            console.log("fetched data");
            console.log(response.Day);
            console.log(response.Frequency);
            setChartData(response);
        } catch (error) {
            toast.error('Error');
        }
    };

    const chartRef = useRef(null);

    useEffect(() => {
        // fetchAllAnalyzedDataFunc();

        if (chartRef.current) {
            const myChart = new Chart(chartRef.current, {
                type: 'pie',
                data: {
                    // labels:chartData.Day,
                    labels: ['1','2','3','4','5','6'],
                    datasets: [{
                        label: 'Pie Chart',
                        // data: chartData.Frequency,
                        data: [1,2,3,4,5,6],
                        borderWidth: 1,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            return () => {
                myChart.destroy();
            };
        }
    }, [chartRef, chartData]);

    return (
      <div style={{ width: '35vw' }}>
          <canvas ref={chartRef}></canvas>
      </div>
    );
};

export default ChartTwo;
