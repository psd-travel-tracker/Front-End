import React from 'react';
import { useEffect, useState } from "react";
import ExpenseCard from './ExpenseCard';
import '../Style/trip_details.css';
import { categoryMap } from '../utils/categoryMap';


export default function ExpenseList({ expenses }) {
  function handleEdit(expense) {
    console.log("Edit expense:", expense);
  }

  function handleDelete(expenseId) {
    console.log("Delete expense with ID:", expenseId);
  }

  return (
    <div className="expense-list-container">
      {expenses.map(exp => {
        console.log("Expense:", exp); // ✅ valid placement
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