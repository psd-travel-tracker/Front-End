import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { summarizeExpensesByCategory } from '../utils/summarizeExpenses';
import { categoryMap } from '../utils/categoryMap';
import '../Style/trip_details.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TripPieChart({ expenses }) {
  const summarized = summarizeExpensesByCategory(expenses);
  
  const data = {
    labels: summarized.map(item => item.name),
    datasets: [
      {
        label: 'Trip Expenses',
        data: summarized.map(item => item.value),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#7CD1A1',
          '#B39CD0', '#FFA07A', '#90EE90', '#FFB6C1'
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
      },
      tooltip: { // this makes it so when you hover over aprts of the pie chart you get to see the total spent in that category
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed || 0;
            return `${label}: $${value.toFixed(2)}`;
          }
        }
      }
    }
  };

  const total = summarized.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
    <h3>Trip Expense Breakdown</h3>
    <Pie data={data} options={options} />
    <p style={{
      textAlign: 'center',
      marginTop: '1rem',
      fontWeight: '600',
      fontSize: '1.1rem',
      color: '#333'
    }}>
      Total Spent: ${total.toFixed(2)}
    </p>
  </div>
  
  );
}

