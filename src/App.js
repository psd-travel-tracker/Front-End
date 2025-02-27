import { useEffect, useState } from "react";

export default function Square() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchData() {
        try {
            console.log("We are here");

            // Get trips - we are hitting the trips endpoint
            const response = await fetch('http://localhost:3001/trips');
            if (!response.ok) {
                console.log({"pre-throw": response.status});

                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const jsonData = await response.json();
            console.log(jsonData);

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
        return <p>Loading data...</p>;
    }
    if (error) {
        return <p style={{color: "red"}}>Error: {error.message}</p>;
    }
    // TODO: Make a reusable component for <Trip></Trip>
    // 
    return data ?
        data.map( trip => <button className="square">{trip.name}</button> )
    : <></>;

}