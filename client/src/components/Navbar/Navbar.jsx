import React from "react";
import { useState } from 'react';

import './Navbar.css'
import cart from "../Asserts/cart.png"
import { Link } from "react-router-dom";
import CartSlider from "./../cart_slider/CartSlider";

const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([
        {
            name: 'Denim shoulder bag',
            price: 5000,
            qty: 1,
            image: ''
        },
        {
            name: 'FRECI bag',
            price: 4500,
            qty: 2,
            image: ''
        },
        {
            name: 'Denim shoulder bag',
            price: 5000,
            qty: 1,
            image: ''
        },
        {
            name: 'FRECI bag',
            price: 4500,
            qty: 2,
            image: ''
        }
    ]);


    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    const updateQty = (index, qty) => {
        const updatedItems = [...cartItems];
        updatedItems[index].qty = qty;
        setCartItems(updatedItems);
    };

    const removeItem = (index) => {
        const updatedItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedItems);
    };


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
                cartItems={cartItems}
                isOpen={isCartOpen}
                closeCart={closeCart}
                updateQty={updateQty}
                removeItem={removeItem}
            />

        </div>
    )
}

export default Navbar;