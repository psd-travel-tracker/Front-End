import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function CreateNewTrip() {
    const navigate = useNavigate();
    // State variables to store the data, loading state, and error state
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        destination: "",
        startDate: "",
        endDate: "",
        budget: ""
    });
    
    async function createTrip(formData) {
        try {
            setLoading(true);
            const newTrip = {
                name: formData.destination,
                userId: 1  // Replace with actual user ID once we sort out our auth system
            };
            // Get trips - we are hitting the trips endpoint
            const response = await fetch('http://localhost:3001/trips', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTrip)
            });

            if (!response.ok) {
                console.log({"pre-throw": response.status});

                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const jsonData = await response.json();

            navigate('/');
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        
        await createTrip(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="welcome-title">Create New Trip</h1>
            <div className="formWrapper">
                <label htmlFor="destination">name of destination:</label>
                <input type="text" id="destination" name="destination" onChange={handleChange}/>
                <label htmlFor="startDate">start date:</label>
                <input type="text" id="startDate" name="startDate" onChange={handleChange}/>
                <label htmlFor="endDate">end date:</label>
                <input type="text" id="endDate" name="endDate" onChange={handleChange}/>
                <label htmlFor="budget">Starting budget: </label>
                <input type="text" id="budget" name="budget" onChange={handleChange}/>
                <input type="submit" className="button" value="submit"/>
            </div>
        </form>
    );
}