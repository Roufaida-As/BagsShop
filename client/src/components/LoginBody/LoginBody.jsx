import React, { useState } from "react";
import './LoginBody.css';
import icon1 from '../../assets/sms.png';
import icon2 from '../../assets/key-square.png';
import { Link } from "react-router-dom";

const LoginBody = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email submitted:", email);
        console.log("Password submitted:", password);
    };

    return (
        <div className="Login_body">
            <div className="container">
                <h1>Login</h1>
                <p>You do not have an account? <Link to='/register'>Register</Link></p>
                <span>BagShop</span>
                <div className="email-box">
                    <img src={icon1} alt="email icon" className="input-icon1" />
                    <input
                        className="email-input"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
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
                        onChange={handlePasswordChange}
                        placeholder="Password"
                        required
                    />
                </div>
                <button>Login</button>
            </div>
        </div>
    );
}

export default LoginBody;