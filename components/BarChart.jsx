import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    Legend,
    CategoryScale,
    Tooltip,
    Title,
    BarElement,
    LinearScale
} from 'chart.js';

ChartJS.register(
    Legend,
    CategoryScale,
    Tooltip,
    Title,
    BarElement,
    LinearScale
);

function BarChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Sales $',
                    data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgb(53, 162, 235, 0.4',
                },
            ]
        });

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        });

    }, [])


    return (
        <>
            <div className='bg-white w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto border p-4 rounded-lg'>
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
    )
}

export default BarChart
