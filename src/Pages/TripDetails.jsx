import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Chart from '../Components/Chart';
import '../Style/trip_details.css';
import ExpenseList from '../Components/ExpenseList';
import { useNavigate } from 'react-router-dom';


export default function TripDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [tripName, setTripName] = useState('');
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expenseLoading, setExpenseLoading] = useState(true);
    const [expenseError, setExpenseError] = useState(null);
    

    // this all here is to just fetch the right trip ID and set the name of the trip up top
    async function fetchAllTrips() {
        try {
            const response = await fetch('http://localhost:3001/trips');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const jsonData = await response.json();

            // Assuming jsonData.data is an array of trips
            const matchingTrip = jsonData.data.find(trip => trip.id == id);
            if (matchingTrip) {
                setTripName(matchingTrip.name);
            } else {
                setTripName('(Trip not found)');
            }

            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }
    async function fetchExpenses() {
          try {
              const response = await fetch(`http://localhost:3001/expenses?tripId=${id}`); 
              if (!response.ok) {
                  console.log({"pre-throw": response.status});
                  throw new Error(`HTTP error! status: ${response.status}`);
              }
    
              const jsonData = await response.json();
    
              setExpenses(jsonData.data);
              setExpenseLoading(false);
          } catch (error) {
              setExpenseError(error);
              setExpenseLoading(false);
          }
      }
      useEffect(() => {
        fetchAllTrips();
        fetchExpenses();
      }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (expenseLoading) return <p>Expense Loading...</p>;
    if (expenseError) return <p>Expense Error: {expenseError.message}</p>;

    return (
        <div>
            <h1 className= "Trip-Detail-trip-title">{tripName}</h1>
            <p>Details about the trip with ID: {id}</p>
            <Chart expenses = {expenses}/>
            <button className="create-trip-button" onClick={() => 
            navigate(`/trip-details/${id}/create-expense`)}>
            Add expense
            </button>
            <ExpenseList expenses={expenses}/>
            
        </div>
    )
}
