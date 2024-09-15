import React from 'react';
import './productInfo.css';

const ProductInfo = ({ title, price, description, onAddToCart }) => {
    return (
        <div className="product-info-container">
            <h1 className="product-title">{title}</h1>
            <h1 className="product-price">{`${price} DA`}</h1>
            <p className="product-description">{description}</p>
            <button className="add-to-cart-btn" onClick={onAddToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductInfo;
