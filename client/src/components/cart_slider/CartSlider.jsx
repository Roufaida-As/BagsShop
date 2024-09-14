import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartSlider.css';
import { CartContext } from './CartContext';
import axios from "axios";
import API_URL from '../../config';

const CartSlider = ({ isOpen, closeCart }) => {

    const { cartItems, updateQty, removeFromCart } = useContext(CartContext); // Access cart items from CartContext

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0);


    // Function to handle checkout
    const handleCheckout = async () => {
        const token = localStorage.getItem('token');
        console.log('Token:', token);

        const orderData = {
            orderItems: cartItems.map(item => ({
                product: item._id, // Ensure `product` is included
                name: item.name,
                price: item.price,
                image: item.image,
                qty: item.qty
            })),
            userAdress: {
                city:
                    "tipasa",
                postalCode:
                    "42000",
                country:
                    "algeria"
            }, // Replace this with actual user address
            totalPrice: totalPrice,
        };

        try {
            const response = await axios.post(`${API_URL}/api/orders`, orderData, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(token)}`, // Assuming you're using JWT for auth
                },
            });

            if (response.status === 201) {
                alert('Order placed successfully');
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

    const navigate = useNavigate();
    // Function to handle continue shopping
    const handleContinueShopping = () => {
        closeCart(); // Close the cart slider
        navigate('/'); // Redirect to home page
    };


    return (
        <div className={`cart-slider ${isOpen ? 'open' : ''}`}>
            <div className="cart-header">
                <h2>Shopping Cart</h2>
                <span className="cart-close" onClick={closeCart}>X</span> {/* X is clickable */}            </div>

            <div className="cart-items">
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
            </div>

            <div className="cart-footer">
                <div className="total-price">
                    <p>total Price:</p>
                    <p>{totalPrice} DA</p>
                </div>
                <button className="checkout-btn" onClick={handleCheckout} >Checkout</button>
                <p className="continue-shopping">
                    Or <span style={{ color: '#DCB780', cursor: 'pointer' }} onClick={handleContinueShopping}>Continue Shopping</span>
                </p>

            </div>
        </div>
    );
};

export default CartSlider;
