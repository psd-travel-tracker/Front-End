import '../Style/tripdetails.css'; 

export default function ExpenseCard({ name, cost }) {
    return (
      <div name="expense-card" >
        <span>{name}</span>
        <span>${cost}</span>
      </div>
    );
  }
  