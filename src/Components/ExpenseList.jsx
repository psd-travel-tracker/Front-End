import ExpenseCard from './ExpenseCard';
import '../Style/trip_details.css'; 

export default function ExpenseList() {
  const dummyExpenses = [
    { id: 1, name: 'Dinner', cost: 45 },
    { id: 2, name: 'Train Ticket', cost: 30 },
    { id: 3, name: 'Museum', cost: 15 },
    { id: 4, name: 'Ice Cream', cost: 7 }
  ];

  return (
    <div className="expense-list-container">
      {dummyExpenses.map(exp => (
        <ExpenseCard key={exp.id} name={exp.name} cost={exp.cost} />
      ))}
    </div>
  );
}
