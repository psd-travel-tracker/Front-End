import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import NavMenu from "../Components/NavMenu";

export default function CreateExpense() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        cost: "",
    });
    
    async function createExpense(formData) {
        try {
            setLoading(true);
            const newExpense = {
                name: formData.name,
                description: formData.description,
                cost: formData.cost,
            };
            
            const response = await fetch(`http://localhost:3001/expenses?tripId=${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newExpense)
            });

            if (!response.ok) {
                console.log({"pre-throw": response.status});

                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const jsonData = await response.json();

            navigate(`/trip-details/${id}`);
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
        await createExpense(formData);
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h1 className="welcome-title">Add expense</h1>
            <div className="formWrapper">
                <label htmlFor="name">name of expense:</label>
                <input type="text" id="name" name="name" onChange={handleChange}/>
                <label htmlFor="description">description:</label>
                <input type="text" id="description" name="description" onChange={handleChange}/>
                <label htmlFor="cost">cost:</label>
                <input type="text" id="cost" name="cost" onChange={handleChange}/>
                <input type="submit" className="button" value="submit"/>
            </div>
        </form>
        <br/><br/><br/>
        <NavMenu/>
        </>
    );
}