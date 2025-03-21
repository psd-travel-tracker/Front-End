import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ViewTrips from "./Pages/ViewTrips";
import CreateNewTrip from "./Pages/CreateNewTrip";
import ActiveTripDetails from "./Pages/ActiveTripDetails";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} /> 
                <Route path="/register" element={<RegisterPage/>} /> 
                <Route path="/" element={<ViewTrips/>} />
                <Route path="/create-new-trip" element={<CreateNewTrip/>} />
                <Route path="/active-trip-details" element={<ActiveTripDetails/>} />
            </Routes>
        </Router>
    );
}

/*Everything here will likely need to be moved out soon app is meant to be pretty bare bones with most of the work going on in each page */
/*
import { useEffect, useState } from "react";
import Trip from "./Trip.js"; // Imports the trip component
import  ViewTrips  from "./Pages/ViewTrips.jsx";

export function RequestTripData() {
    // State variables to store the data, loading state, and error state
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
    return(
        <ViewTrips data={data}/>
    )
   {/*return data ?
        data.map( trip => <Trip Name={trip.name}></Trip> )
    : <></>;

}*/