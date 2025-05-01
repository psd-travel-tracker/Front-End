import '../Style/trip_details.css'; 

export default function ExpenseCard({ name, cost, category, onEdit, onDelete }) {
  return (
    <div className="expense-card">
      <div className="expense-info">
        <span className="expense-name">{name}</span>
        {category && <span className="expense-category">({category})</span>
        }
        <span className="expense-cost">${cost}</span>
      </div>
      <div className="expense-actions">
        <button onClick={onEdit}>✎</button>
        <button onClick={onDelete}>🗑️</button>
      </div>
    </div>
  );
}
