import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { AddCircleOutline } from '@mui/icons-material';



const SimpleForm = () => {
  const [formValues, setFormValues] = useState({
    field1: '',
    field2: '',
    field3: '',
  });

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="field1" className="block text-sm font-medium text-gray-700">
            Field 1
          </label>
          <input
            type="text"
            id="field1"
            name="field1"
            value={formValues.field1}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="field2" className="block text-sm font-medium text-gray-700">
            Field 2
          </label>
          <input
            type="text"
            id="field2"
            name="field2"
            value={formValues.field2}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="field3" className="block text-sm font-medium text-gray-700">
            Field 3
          </label>
          <input
            type="text"
            id="field3"
            name="field3"
            value={formValues.field3}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};


const DonutChart = () => {
  const data = {
    labels: ['Scope 1 ', 'Scope 2', 'Scope 3'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: ['red', 'blue', 'yellow'],
        hoverOffset: 4,
      },
    ],
  };

  const config = {
    type: 'pie',
    data: data,
    responsive: true,
    maintainAspectRatio: false,
    width: 300,
    height: 300,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 10,
          generateLabels: function (chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, i) => {
                const meta = chart.getDatasetMeta(0);
                const style = meta.controller.getStyle(i);

                const percentage = Math.round(
                  (data.datasets[0].data[i] / data.datasets[0].data.reduce((a, b) => a + b, 0)) * 100
                );

                return {
                  text: `${label} (${percentage}%)`,
                  fillStyle: style.backgroundColor,
                  strokeStyle: style.borderColor,
                  lineWidth: style.borderWidth,
                  hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,
                  index: i,
                };
              });
            }
            return [];
          },
        },
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            const dataset = data.datasets[tooltipItem.datasetIndex];
            const currentValue = dataset.data[tooltipItem.index];
            const total = dataset.data.reduce((a, b) => a + b, 0);
            const percentage = Math.round((currentValue / total) * 100);
            return `${data.labels[tooltipItem.index]}: ${currentValue} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <>
      <div className="bg-purewhite flex flex-col p-5">
        <div className='my-2'>
          <h1 className="text-xl font-bold">CO2 Emission</h1>
          <h1 className="text-md text-gray-400 ">All Users</h1>
        </div>
        <div className="h-[30vh]">
          <Doughnut  data={data} options={config} />
        </div>
        <div>
        </div>
      </div>
    </>
  );
};

export default DonutChart;
