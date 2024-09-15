import React from "react";
import { useState } from 'react';
import './Navbar.css'
import cart from "../Asserts/cart.png"
import CartSlider from "./../cart_slider/CartSlider";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

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
                    <NavLink
                        to='/login'
                        className="nav-link"
                        style={({ isActive }) => ({
                            color: isActive ? "#DCB780" : "black",
                        })}
                    >
                        Log in
                    </NavLink>
                </li>
            </ul>
            <div className="nav_cart" onClick={openCart}>
                <img src={cart} alt="Cart" />
            </div>

            <div className={`overlay ${isCartOpen ? 'visible' : ''}`} onClick={closeCart}></div>

            {/* Cart Slider */}
            <CartSlider
                isOpen={isCartOpen}
                closeCart={closeCart}
            />

        </div>
    )
}

export default Navbar;