import React from 'react';
import './productImage.css';

const ProductImage = ({ image }) => {
    return (
        <div className="product-image-container">
            <img src={`http://localhost:3002${image}`}  alt="Product" className="product-image" />
        </div>
    );
}

export default ProductImage;
