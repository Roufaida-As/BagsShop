import React, { useState, useContext } from 'react';
import './CartBody.css';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './../cart_slider/CartContext';
import API_URL from '../../config';
import axios from "axios";

const CartBody = () => {
    const { cartItems, updateQty, removeFromCart } = useContext(CartContext);
    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [division, setDivision] = useState('');
    const [address, setAddress] = useState('');


    const handlePhoneChange = (e) => setPhoneNumber(e.target.value);
    const handleCityChange = (e) => setCity(e.target.value);
    const handleDivisionChange = (e) => setDivision(e.target.value);
    const handleAddressChange = (e) => setAddress(e.target.value);
    const navigate = useNavigate();

    // Function to handle checkout
    const handleSave = async () => {
        const token = localStorage.getItem('token');

        if (!token) {
            // If no token is found, redirect to the login page
            alert('You need to log in or register before placing an order.');
            navigate('/login'); // You can change this to '/register' if needed
            return;
        }

        const orderData = {
            orderItems: cartItems.map(item => ({
                product: item._id, 
                name: item.name,
                price: item.price,
                image: item.image,
                qty: item.qty
            })),
            userAdress: {
                city:
                    city,
                phoneNumber:
                    phoneNumber,
                address:
                    address,
                division:
                    division
            },
            totalPrice: totalPrice,
        };

        try {
            const response = await axios.post(`${API_URL}/api/orders`, orderData, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(token)}`, 
                },
            });

            if (response.status === 201) {
                alert('Order placed successfully');
                navigate('/'); // Redirect to home page
                console.log(response.data);
            } else {
                alert('Error placing order: ' + response.data.message);
                console.log(response.data);
            }
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            alert('Error placing order: ' + (error.response ? error.response.data.message : error.message));
        }
    };


    return (
        <div className='cart-body'>
            <h1>My Order</h1>
            <div className='cart-container'>
                <div className='products-container'>
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <div className="cart-item-left">
                                <img src={`${API_URL}${item.image}`} alt='' />
                            </div>
                            <div className="cart-item-right">
                                <div className="cart-item-info">
                                    <p>{item.name}</p>
                                    <p>{item.price} DA</p>
                                </div>
                                <div className="cart-item-actions">
                                    <div className="qty-container">
                                        <p>Qty: </p>
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.qty}
                                            onChange={(e) => updateQty(item._id, parseInt(e.target.value))}
                                        />
                                    </div>
                                    <span
                                        className="cart-remove"
                                        onClick={() => removeFromCart(item._id)}
                                        style={{ color: '#DCB780', cursor: 'pointer' }}
                                    >
                                        Remove
                                    </span>
                                </div>
                            </div>
                        </div>

                    ))}
                    <div className="total-price">
                        <p>Total Price:</p>
                        <p>{totalPrice} DA</p>
                    </div>
                </div>

                <div className='info-container'>
                    <h2>Shipping Details</h2>
                    <label htmlFor="phone">Phone Number</label>

                    <div className="phone-box">
                        <input
                            id="phone"
                            className="phone-input"
                            type="tel"
                            value={phoneNumber}
                            onChange={handlePhoneChange}
                            placeholder="Enter phone number"
                            required
                        />
                    </div>
                    <label htmlFor="city">City</label>

                    <div className="city-box">
                        <input
                            id="city"
                            className="city-input"
                            type="text"
                            value={city}
                            onChange={handleCityChange}
                            placeholder="Enter city"
                            required
                        />
                    </div>
                    <label htmlFor="division">Administrative Division</label>

                    <div className="division-box">
                        <input
                            id="division"
                            className="division-input"
                            type="text"
                            value={division}
                            onChange={handleDivisionChange}
                            placeholder="Enter administrative division"
                            required
                        />
                    </div>
                    <label htmlFor="address">Address</label>

                    <div className="address-box">
                        <input
                            id="address"
                            className="address-input"
                            type="text"
                            value={address}
                            onChange={handleAddressChange}
                            placeholder="Enter address"
                            required
                        />
                    </div>
                    <button className="save-btn" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default CartBody;