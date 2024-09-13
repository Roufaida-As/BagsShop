import React, { useState } from "react";
import './registerBody.css';
import icon1 from '../../assets/sms.png';
import icon2 from '../../assets/key-square.png';
import icon3 from '../../assets/user.png'
import { Link } from "react-router-dom";

const RegisterBody = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
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
        <div className="Register_body">
            <div className="container">
                <h1>Register</h1>
                <div className="row-content">
                    <span>BagShop</span>
                    <div className="inputs-col">
                        <p>Already have an account ? <Link to='/login'>Login</Link></p>
                        <div className="username-box">
                            <img src={icon3} alt="user icon" className="input-icon1" />
                            <input
                                className="email-input"
                                type="text"
                                value={username}
                                onChange={handleUsernameChange}
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
                    </div>
                </div>
                <button>Register</button>
            </div>
        </div>
    );
}

export default RegisterBody;