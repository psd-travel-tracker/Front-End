import React from 'react';
import Trip from '../Components/Trip.jsx';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


export default function ViewTrips() {
// State variables to store the data, loading state, and error state
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    async function fetchData() {
        try {
            // Get trips - we are hitting the trips endpoint
            const response = await fetch('http://localhost:3001/trips'); 
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
    return(
        <div>
            {/* TODO: add a navigation menu component */}
            {/* <NavMenu/> */}
            <h1 className="welcome-title">Trips</h1>
            <button className="create-trip-button" onClick={() => navigate('/create-new-trip')}>Add a trip</button>
            { data && data.length ?
                <div className="trips-wrapper">
                    {data.map( trip => 
                        <Trip key={`TripId_${trip.id}`} TripId={trip.id} Trip={trip}/>
                    )}
                </div>
                : <p>No Trips Found</p> }
            <br/>
        </div>
    )

}