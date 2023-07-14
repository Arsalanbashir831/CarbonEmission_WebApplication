import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    // Handle the selected option value based on dates here
    // For example, you can filter the data based on the selected date range
    // and update the chart accordingly
  };

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Emission',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(167, 224, 218, 0.40)',
        borderColor: 'rgba(167, 224, 218, 0.40)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'white',
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: 'white',
          callback: (value) => `${value}${selectedOption}`, // Use the selected option value in the label
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
  };

  return (
    <div className="w-full bg-main">
      <div className="mb-4 text-right my-2 mx-3">
        <select
          className="border border-gray-300 rounded px-3 py-2 text-white bg-main"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="">Select Date Range</option>
          <option value="Last 7 Days">Last 7 Days</option>
          <option value="Last 30 Days">Last 30 Days</option>
          {/* Add more date range options as needed */}
        </select>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
