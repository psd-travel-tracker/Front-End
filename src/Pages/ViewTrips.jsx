import React from 'react';
import Trips from '../Components/Trips.js';
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
            <Trips data={data}/>
            <br/>
        </div>
    )

}