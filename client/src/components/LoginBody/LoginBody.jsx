import React, { useState } from "react";
import './LoginBody.css';
import icon1 from '../../assets/sms.png';
import icon2 from '../../assets/key-square.png';
import { Link } from "react-router-dom";
import axios from "axios";
import API_URL from '../../config';


const LoginBody = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${API_URL}/api/users/login`, { email, password });
            // Store user token in local storage or state management (like Redux)
            localStorage.setItem("token", JSON.stringify(data.token));
           
            // Clear cart items for new user(not sure about this)
            localStorage.removeItem('cartItems');

            // Redirect to home or another page after successful login
            window.location.href = "/"; // Redirect to homepage
        } catch (err) {
            console.log(err)
            setError("Invalid email or password");
        }
    };


    return (
        <div className="Login_body">
            <div className="container">
                <h1>Login</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className="row-content">
                    <span>BagShop</span>
                    <div className="inputs-col">
                        <p>You do not have an account? <Link to='/register'>Register</Link></p>

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
                <button onClick={handleSubmit}>Login</button>
            </div>
        </div>
    );
}

export default LoginBody;