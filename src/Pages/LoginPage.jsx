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
        rememberMe: "",
    });
    async function validateUser(formData) {
        // TODO: make async fucntion to validate user and update session with validated user from our DB
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
                <div className="logo-circle"></div>
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
                                <input className="form-input" type="email" id="email" placeholder="your@email.com" onChange={handleChange}></input>
                            </div>
                        </div>
                    
                        <div className="form-group">
                            <label className="form-label" htmlFor="password">Password</label>
                            <div className="input-container">
                                <input className="form-input" type="password" id="password" placeholder="••••••••" onChange={handleChange}></input>
                            </div>
                        </div>
                    
                        <div className="form-options">
                            <div className="remember-me">
                                <input className="checkbox" type="checkbox" id="rememberMe" onChange={handleChange}></input>
                                <label className="remember-label" htmlFor="rememberMe">Remember me</label>
                            </div>
                        </div>
                        
                        <button className="login-button" type="submit">
                            <span className="button-text">Log in</span>
                        </button>
                    </form>
                    <div className="card-footer">
                        <a className="login-redirect-link" onClick={() => navigate('/')}>Sign up</a>
                        <a className="login-redirect-link" onClick={() => navigate('/')}>Forgot password?</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}