import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TripPieChart() {
  const data = {
    labels: ['Food', 'Travel', 'Lodging', 'Activities'],
    datasets: [
      {
        label: 'Trip Expenses',
        data: [300, 200, 500, 150],
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#7CD1A1'
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        position: 'left', 
        align: 'center'
      }
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h3>Trip Expense Breakdown</h3>
      <Pie data={data} options={options} />
    </div>
  );
}

