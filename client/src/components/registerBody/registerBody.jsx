import React, { useState } from "react";
import './registerBody.css';
import icon1 from '../../assets/sms.png';
import icon2 from '../../assets/key-square.png';
import icon3 from '../../assets/user.png'
import { Link } from "react-router-dom";
import axios from "axios";
import API_URL from '../../config';

const RegisterBody = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${API_URL}/api/users/signup`, {
                name: username,
                email,
                password,
            });
            // Store user token in local storage or state management
            localStorage.setItem("token", JSON.stringify(data.token));
            
            // Clear cart items for new user(not sure about this)
            localStorage.removeItem('cartItems');

            // Redirect to home or another page after successful registration
            window.location.href = "/";
        } catch (err) {
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <div className="Register_body">
            <div className="container">
                <h1>Register</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className="row-content">
                    <span>BagShop</span>
                    <div className="inputs-col">
                        <p>Already have an account ? <Link to='/login' >Login</Link></p>
                        <div className="username-box">
                            <img src={icon3} alt="user icon" className="input-icon1" />
                            <input
                                className="email-input"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                                required
                            />
                        </div>
                        <div className="email-box">
                            <img src={icon1} alt="email icon" className="input-icon1" />
                            <input
                                className="email-input"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                            />
                        </div>

                        <div className="pswd-box">
                            <img src={icon2} alt="password icon" className="input-icon2" />
                            <input
                                className="pswd-input"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />
                        </div>
                    </div>
                </div>
                <button onClick={handleSubmit}>Register</button>
            </div>
        </div>
    );
}

export default RegisterBody;