import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { AddCircleOutline } from '@mui/icons-material';




  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };



const PieChart = () => {
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
        <div>
          <h1 className="text-xl font-bold">Emission For Period</h1>
          <h1>All Users</h1>
        </div>
        <div className="h-[30vh]">
          <Pie data={data} options={config} />
        </div>

        <div>
      
     </div>
      </div>
    </>
  );
};

export default PieChart;
