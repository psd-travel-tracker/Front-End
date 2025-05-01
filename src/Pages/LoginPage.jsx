import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../Style/login.css";

export default function HomePage() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    async function validateUser(formData) {
        try {
            setLoading(true);
            const userData = {
                email: formData.email,
                password: formData.password
            };
            
            const response = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                console.log({"pre-throw": response.status});

                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const jsonData = await response.json();
            console.log(jsonData.data.id);
            localStorage.setItem('userId', JSON.stringify(jsonData.data.id));

            navigate('/view-trips');
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

        await validateUser(formData);
    };

    return (
        <>
        <div className="login-wrapper">
            <div className="logo-container">
                <svg fill="#000000" height="64px" width="64px" version="1.1" id="Layer_1" viewBox="0 0 248.361 248.361">
                    <g><g><g>
                        <path d="M213.089,39.425H169.67c-1.909-13.801-13.751-24.473-28.068-24.473h-33.475c-14.317,0-26.159,10.671-28.068,24.473H35.27 C15.823,39.425,0,55.248,0,74.695v123.444c0,19.447,15.823,35.27,35.27,35.27h177.819c19.449,0,35.272-15.823,35.272-35.27 V74.695C248.359,55.248,232.538,39.425,213.089,39.425z M108.126,28.178h33.475c7.001,0,12.889,4.783,14.615,11.247H93.511 C95.237,32.962,101.125,28.178,108.126,28.178z M235.135,198.139h-0.003c0,12.155-9.889,22.044-22.046,22.044H35.27 c-12.155,0-22.044-9.889-22.044-22.044V74.695c0-12.155,9.889-22.044,22.044-22.044h177.819c12.157,0,22.046,9.889,22.046,22.044 V198.139z"></path>
                        <path d="M182.99,77.589c-3.683-3.686-8.632-5.714-13.936-5.714c-5.597,0-10.905,2.224-15.095,6.421l-16.184,17.298L77.697,77.611 L64.722,90.579c-3.677,3.699-3.666,9.701,0.024,13.38l0.661,0.661l42.002,23.117l-15.92,16.195l-18.953-3.869l-8.844,8.853 c-1.66,1.655-2.575,3.858-2.575,6.201s0.915,4.548,2.57,6.196l35.843,35.843c1.653,1.655,3.855,2.566,6.194,2.566 c2.352,0,4.559-0.919,6.196-2.568l8.862-8.853l-3.963-19.312l16.107-15.885l23.298,42.335l0.666,0.666 c1.788,1.79,4.166,2.773,6.695,2.773c2.528,0,4.909-0.985,6.69-2.773l12.959-12.955l-18.102-60.485l17.306-16.198 C190.551,98.354,190.798,85.399,182.99,77.589z M173.243,96.963l-23.133,21.642l18.19,60.772l-3.752,3.752l-28.465-51.714 l-33.663,33.202l3.974,19.365l-0.668,0.668l-29.53-29.534l0.67-0.67l19.021,3.882l33.189-33.762L77.712,96.295l3.752-3.75 l60.371,18.071l21.631-23.126c1.539-1.539,3.525-2.387,5.588-2.387c1.77,0,3.397,0.652,4.581,1.838 C176.289,89.596,176.042,94.159,173.243,96.963z"></path>
                    </g></g></g>
                </svg>
                <h1 className="logo-title">Travel Tracker</h1>
                <div className="logo-divider">
                    <div className="logo-line"></div>
                    <div className="logo-line"></div>
                </div>
            </div>
            
            <div className="login-card">
                <div className="card-header">
                    <svg className="card-wave" viewBox="0 0 400 50" preserveAspectRatio="none">
                        <path d="M0,0 L400,0 L400,30 Q300,50 200,35 Q100,20 0,40 L0,0 Z" fill="#BC6C25"></path>
                    </svg>
                </div>
            
                <div className="card-content">
                    <h2 className="card-title">Welcome Back</h2>
                    <p className="card-subtitle">Sign in to continue your journey</p>
                
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email</label>
                            <div className="input-container">
                                <input className="form-input" type="email" id="email" name="email" placeholder="your@email.com" onChange={handleChange}></input>
                            </div>
                        </div>
                    
                        <div className="form-group">
                            <label className="form-label" htmlFor="password">Password</label>
                            <div className="input-container">
                                <input className="form-input" type="password" id="password" name="password" placeholder="••••••••" onChange={handleChange}></input>
                            </div>
                        </div>
                        
                        <button className="login-button" type="submit" onSubmit={validateUser}>
                            <span className="button-text">Log in</span>
                        </button>
                    </form>
                    <div className="card-footer">
                        <a className="login-redirect-link">Sign up</a>
                        <a className="login-redirect-link">Forgot password?</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}