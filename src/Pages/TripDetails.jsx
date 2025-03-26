import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Chart from '../Components/Chart';
import '../Style/trip_details.css';
import ExpenseList from '../Components/ExpenseList';

export default function TripDetails() {
    const { id } = useParams();
    const [tripName, setTripName] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    useEffect(() => {
        fetchAllTrips();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Trip Name: {tripName}</h1>
            <p>Details about the trip with ID: {id}</p>
            <Chart />
            <ExpenseList/>
            <p>Scrollable Expenses Area and Button to add new expense</p>
        </div>
    )
}
