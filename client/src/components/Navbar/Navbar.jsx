import React from "react";
import './Navbar.css'
import cart from "../Asserts/cart.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    <div className="Navbar">
        <div className="Navbar_logo">
            <p>BagShop</p>

        </div>
        <ul className="nav_menu">
                <li><Link style={{textDecoration : 'none'}} to='/'>Home</Link></li>
                <li>About</li>
                <li>Contact</li>
                <li>Log in</li> 
            
        </ul>
        <div className="nav_cart">
            <img src={cart} />
        </div>

    </div>
    )
}

export default Navbar;