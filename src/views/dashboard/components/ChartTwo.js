import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartTwo = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const myChart = new Chart(chartRef.current, {
                type: 'pie',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: 'Bar Chart',
                        data: [12, 19, 3, 5, 8, 3],
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
    }, [chartRef]);

    return (
        <div style={{ width: '35vw' }}>
            <canvas ref={chartRef}> </canvas>
        </div>
    );
};

export default ChartTwo;
