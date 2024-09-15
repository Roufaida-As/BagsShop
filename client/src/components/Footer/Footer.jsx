/* eslint-disable no-unused-vars */
import React from "react";
import './Footer.css';
import facebook from "../Asserts/fb.png";
import instagram from "../Asserts/ig.png";



const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column about">
                    <h2>About</h2>
                    <p>Our brand is dedicated to delivering high-quality bags with an elegant, feminine touch. Each piece is crafted with care, blending style and durability for every occasion.</p>
                </div>
                <div className="footer-column contact">
                    <h2>Contact</h2>
                    <p>Phone: +213 123 456 789</p>
                    <p>Email: contact@bagshop.dz</p>
                    <p>Address: 123, Bag Street, Algiers, Algeria</p>
                </div>
                <div className="footer-column follow-us">
                    <h2>Follow Us</h2>
                    <div className="social-icons">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="Facebook" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;