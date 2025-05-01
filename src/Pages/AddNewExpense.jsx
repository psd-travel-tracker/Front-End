import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavMenu from "../Components/NavMenu";
import { reverseCategoryMap } from "../utils/categoryMap.js";
import "../Style/create_expense.css";
import { useEffect } from "react";

export default function AddNewExpense() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [trips, setTrips] = useState([]);
    const [tripId, setTripId] = useState("");

    useEffect(() => {
        async function fetchTrips() {
            try {
                const response = await fetch("http://localhost:3001/trips");
                if (!response.ok)
                    throw new Error(`HTTP error! status: ${response.status}`);
                const json = await response.json();
                setTrips(json.data);
            } catch (err) {
                console.error("Failed to fetch trips:", err);
            }
        }

        fetchTrips();
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        cost: "",
        category: "Other",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newExpense = {
            name: formData.name,
            description: formData.description,
            cost: formData.cost,
            tripId: tripId,
            categoryId: reverseCategoryMap[formData.category] || 1,
            userId: 1,
        };

        try {
            const response = await fetch(
                `http://localhost:3001/expenses?tripId=${tripId}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newExpense),
                },
            );

            if (!response.ok)
                throw new Error(`HTTP error! status: ${response.status}`);

            await response.json();
            navigate(`/trip-details/${tripId}`);
        } catch (error) {
            console.error("Error creating expense:", error);
            alert("Failed to create expense. Please try again.");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1 className="welcome-title">Add a New Expense</h1>
                <div className="formWrapper">
                    <label htmlFor="trip">Select a trip:</label>
                    <select
                        name="trip"
                        required
                        value={tripId}
                        onChange={(e) => setTripId(e.target.value)}
                    >
                        <option value="">-- Select a trip --</option>
                        {trips.map((trip) => (
                            <option key={trip.id} value={trip.id}>
                                {trip.name}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="name">Name of expense:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    <label htmlFor="cost">Cost:</label>
                    <input
                        type="number"
                        step="any"
                        name="cost"
                        required
                        value={formData.cost}
                        onChange={handleChange}
                    />
                    <label htmlFor="category">Category:</label>
                    <select
                        name="category"
                        value={formData.category}
                        required
                        onChange={handleChange}
                    >
                        <option value="">Select a category</option>
                        {Object.keys(reverseCategoryMap).map((label) => (
                            <option key={label} value={label}>
                                {label}
                            </option>
                        ))}
                    </select>
                    <input type="submit" className="button" value="Submit" />
                </div>
            </form>
            <br />
            <br />
            <br />
            <NavMenu />
        </>
    );
}
