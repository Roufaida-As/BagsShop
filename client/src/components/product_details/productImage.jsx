import React from 'react';
import './productImage.css';
import API_URL from '../../config';'./../../config'

const ProductImage = ({ image }) => {
    return (
        <div className="product-image-container">
            <img src={`${API_URL}${image}`}  alt="Product" className="product-image" />
        </div>
    );
}

export default ProductImage;
