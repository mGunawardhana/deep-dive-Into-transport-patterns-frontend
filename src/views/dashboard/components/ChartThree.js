import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartThree = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const myChart = new Chart(chartRef.current, {
                type: 'bubble',
                data: {
                    datasets: [{
                        label: 'Bubble Chart',
                        data: [
                            { x: 10, y: 20, r: 5 },
                            { x: 15, y: 10, r: 8 },
                            { x: 25, y: 18, r: 6 },
                            { x: 7, y: 15, r: 10 },
                            { x: 30, y: 12, r: 7 },
                            { x: 18, y: 25, r: 8 },
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
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
                        x: {
                            type: 'linear',
                            position: 'bottom'
                        },
                        y: {
                            type: 'linear',
                            position: 'left',
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
        <div style={{ width: '50vw' }}>
            <canvas ref={chartRef}> </canvas>
        </div>
    );
};

export default ChartThree;
