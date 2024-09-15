import React from "react";
import { useState } from 'react';
import './Navbar.css'
import cart from "../Asserts/cart.png"
import CartSlider from "./../cart_slider/CartSlider";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? true : false); // To check if user is logged in
    const navigate = useNavigate();

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    const handleLogout = () => {
        // Clear token and log out the user
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <div className="Navbar">
            <div className="Navbar_logo">
                <p>BagShop</p>

            </div>
            <ul className="nav_menu">
                <li>
                    <NavLink
                        exact
                        to='/'
                        className="nav-link"
                        style={({ isActive }) => ({
                            color: isActive ? "#DCB780" : "black",
                        })}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/about'
                        className="nav-link"
                        style={({ isActive }) => ({
                            color: isActive ? "#DCB780" : "black",
                        })}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/contact'
                        className="nav-link"
                        style={({ isActive }) => ({
                            color: isActive ? "#DCB780" : "black",
                        })}
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    {isLoggedIn ? (
                        <span
                            className="nav-link"
                            onClick={handleLogout}
                            style={{ cursor: 'pointer', color: "black" }}
                        >
                            Logout
                        </span>
                    ) : (
                        <NavLink
                            to='/login'
                            className="nav-link"
                            style={({ isActive }) => ({
                                color: isActive ? "#DCB780" : "black",
                            })}
                        >
                            Log in
                        </NavLink>
                    )}
                </li>
            </ul>
            <div className="nav_cart" onClick={openCart}>
                <img src={cart} alt="Cart" />
            </div>

            <div className={`overlay ${isCartOpen ? 'visible' : ''}`} onClick={closeCart}></div>


            <CartSlider
                isOpen={isCartOpen}
                closeCart={closeCart}
            />

        </div>
    )
}

export default Navbar;