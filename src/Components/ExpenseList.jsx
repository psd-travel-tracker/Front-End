import React from 'react';
import { useEffect, useState } from "react";
import ExpenseCard from './ExpenseCard';
import '../Style/trip_details.css';
import { categoryMap } from '../utils/categoryMap';


export default function ExpenseList({ expenses, onDelete }) {
  function handleEdit(expense) {
    console.log("Edit expense:", expense);
  }

  function handleDelete(expenseId) {
    fetch(`http://localhost:3001/expenses/${expenseId}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data.message);
        if (onDelete) onDelete();
        // Optional: refresh parent list or notify deletion
    })
    .catch(err => console.error('Failed to delete expense:', err));
  }

  return (
    <div className="expense-list-container">
      {expenses.map(exp => {
        console.log("Expense:", exp); // Debugging line to check expense data
        return (
          <ExpenseCard
            key={exp.id}
            name={exp.name}
            cost={exp.cost}
            category={categoryMap[exp.categoryId]} 
            onEdit={() => handleEdit(exp)}
            onDelete={() => handleDelete(exp.id)}
          />
        );
      })}
    </div>
  );
  
}