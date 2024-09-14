import React from "react";
import { useState } from 'react';
import './Navbar.css'
import cart from "../Asserts/cart.png"
import { Link } from "react-router-dom";
import CartSlider from "./../cart_slider/CartSlider";

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
                <li><Link style={{ textDecoration: 'none' }} to='/'>Home</Link></li>
                <li>About</li>
                <li>Contact</li>
                <li><Link style={{textDecoration: 'none'}} to='/login'>Log in</Link></li>
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