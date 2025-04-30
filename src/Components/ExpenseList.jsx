import React from 'react';
import { useEffect, useState } from "react";
import ExpenseCard from './ExpenseCard';
import '../Style/trip_details.css';

export default function ExpenseList({tripId},) {
  // State variables to store the data, loading state, and error state
 /* const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  async function fetchData() {
      try {
          const response = await fetch(`http://localhost:3001/expenses?tripId=${tripId}`); 
          if (!response.ok) {
              console.log({"pre-throw": response.status});
              throw new Error(`HTTP error! status: ${response.status}`);
          }

          const jsonData = await response.json();

          setData(jsonData.data);
          setLoading(false);
      } catch (error) {
          setError(error);
          setLoading(false);
      }
  }
  useEffect(() => {
      fetchData();
  }, []);

  if (loading) {
      return <p style={{color: "#BC6C25"}}>Fetching Data...</p>;
  }
  if (error) {
      return <p style={{color: "red"}}>ERROR: {error.message}</p>;
  }
  */
  function handleEdit(expense) {
    console.log("Edit expense:", expense);
  }
  
  function handleDelete(expenseId) {
    console.log("Delete expense with ID:", expenseId);
  }

  return (
    <div className="expense-list-container">
      Hello
    </div>
  );
}
