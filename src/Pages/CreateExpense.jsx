import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavMenu from "../Components/NavMenu";
import { reverseCategoryMap } from "../utils/categoryMap.js";
import "../Style/create_expense.css";
import { useLocation } from "react-router-dom";

export default function CreateExpense({ isEdit = false }) {
    const navigate = useNavigate();
    const { id } = useParams();

    const location = useLocation();
    const existingExpense = location.state?.expense; // Get the existing expense from the location state

    const [data, setData] = useState([]); //this isn't used?? and neither is the loading or error
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        name: existingExpense?.name || "",
        description: existingExpense?.description || "",
        cost: existingExpense?.cost || "",
        category: existingExpense
            ? Object.keys(reverseCategoryMap).find(
                  (key) =>
                      reverseCategoryMap[key] === existingExpense.categoryId,
              )
            : "Other", // Default to "Other" if no existing expense
    });

    async function createExpense(formData) {
        try {
            setLoading(true);
            const newExpense = {
                name: formData.name,
                description: formData.description,
                cost: formData.cost,
                tripId: id,
                categoryId: reverseCategoryMap[formData.category] || 1, // Default to 1 if not found
                userId: 1,
                //tripId: id // Assuming you have the tripId available in the form data
            };

            const response = await fetch(
                `http://localhost:3001/expenses?tripId=${id}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newExpense),
                },
            );

            if (!response.ok) {
                console.log({ "pre-throw": response.status });

                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const jsonData = await response.json();

            navigate(`/trip-details/${id}`);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    async function updateExpense(formData) {
        try {
            setLoading(true);
            const updatedExpense = {
                name: formData.name,
                description: formData.description,
                cost: formData.cost,
                categoryId: reverseCategoryMap[formData.category] || 1,
                userId: 1,
            };

            const response = await fetch(
                `http://localhost:3001/expenses/${existingExpense.id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(updatedExpense),
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            await response.json();
            navigate(`/trip-details/${id}`);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEdit) {
            await updateExpense(formData);
        } else {
            await createExpense(formData);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1 className="welcome-title">
                    {isEdit ? "Edit Expense" : "Add a new expense"}
                </h1>
                <button
                    className="back-button"
                    onClick={() => navigate(`/trip-details/${id}`)}
                >
                    ← Back to Trip
                </button>
                <div className="formWrapper">
                    <label htmlFor="name">name of expense:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="description">description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    <label htmlFor="cost">cost:</label>
                    <input
                        type="number"
                        step="any"
                        name="cost"
                        required
                        value={formData.cost}
                        onChange={handleChange}
                    />
                    <label htmlFor="category">category:</label>
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
                    <input
                        type="submit"
                        className="button"
                        value={isEdit ? "Update" : "Submit"}
                    />
                </div>
            </form>
            <br />
            <br />
            <br />
            <NavMenu />
        </>
    );
}
