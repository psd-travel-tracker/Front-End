import { useEffect, useState } from "react";
import Trip from "./Trip.js";

export default function Square() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
        return <p>Fetching Data...</p>;
    }
    if (error) {
        return <p style={{color: "red"}}>ERROR: {error.message}</p>;
    }

    return data ?
        data.map( trip => <Trip Name={trip.name}></Trip> )
    : <></>;

}