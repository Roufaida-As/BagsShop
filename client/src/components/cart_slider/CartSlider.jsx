import React from 'react';
import './CartSlider.css';

const CartSlider = ({ cartItems, isOpen, closeCart, updateQty, removeItem }) => {
    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

    return (
        <div className={`cart-slider ${isOpen ? 'open' : ''}`}>
            <div className="cart-header">
                <h2>Shopping Cart</h2>
                <span className="cart-close" onClick={closeCart}>X</span> {/* X is clickable */}            </div>

            <div className="cart-items">
                {cartItems.map((item, index) => (
                    <div key={index} className="cart-item">
                        <div className="cart-item-left">
                            <img src={item.image} alt='' />
                        </div>
                        <div className="cart-item-right">
                            <div className="cart-item-info">
                                <p>{item.name}</p>
                                <p>{item.price} DA</p>
                            </div>
                            <div className="cart-item-actions">
                                <div className="qty-container">
                                    <span>Qty: </span>
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.qty}
                                        onChange={(e) => updateQty(index, parseInt(e.target.value))}
                                    />
                                </div>
                                <span
                                    className="cart-remove"
                                    onClick={() => removeItem(index)}
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
                <button className="checkout-btn">Checkout</button>
                <p className="continue-shopping">
                    Or <span style={{ color: '#DCB780' }}>Continue to Shopping</span>
                </p>
            </div>
        </div>
    );
};

export default CartSlider;
