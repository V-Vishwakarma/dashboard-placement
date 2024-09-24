import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register components for chart.js
Chart.register(ArcElement, Tooltip, Legend);

const CircularChart = () => {
    const data = {
        labels: ['Blank Section', 'Second Section', 'Third Section'],
        datasets: [
            {
                label: 'Customer Percentage',
                data: [35, 20, 45],  // Define your segments (these are just placeholders)
                backgroundColor: [
                    'rgba(211, 211, 211, 0.3)', // Light color for blank section
                    'rgba(128, 0, 128, 0.8)',   // Purple for second segment
                    'rgba(255, 105, 180, 0.8)', // Pink for third segment
                ],
                borderWidth: [23, 0, 14],  // Define varying thicknesses for each segment
                hoverBackgroundColor: [
                    'rgba(211, 211, 211, 0.3)',
                    'rgba(128, 0, 128, 0.8)',
                    'rgba(255, 105, 180, 0.8)',
                ],
                hoverBorderColor: 'rgba(255, 255, 255, 1)',
            },
        ],
    };

    const options = {
        cutout: '60%', // Defines the size of the hollow center
        rotation: -100, 
        plugins: {
            legend: {
                display: false, // Hide the legend
            },
            tooltip: {
                enabled: false, // Disable the tooltip for a clean look
            },
        },
    };

    return (
        <div style={{ width: '250px', height: '250px', position: 'relative' }}>
            <Doughnut data={data} options={options} />
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}
            >
                <span className='circular-cart-percentage'>65%</span><br />
                <span>Total New Customers</span>
            </div>
        </div>
    );
};

export default CircularChart;
