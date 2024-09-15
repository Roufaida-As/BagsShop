import React from "react";
import { Link } from 'react-router-dom';
import './ProductsCart.css';
import API_URL from '../../config'
const ProductsCart = ({ id, image, name, price }) => {
    return (
        <div className="carts">
            <Link to={`/products/${id}`} style={{ textDecoration: 'none', color: 'black' }}>

                <div className="cart">
                    <img src={`${API_URL}${image}`} alt="" />
                    <p>{name}</p>
                    <p>{price}</p>

                </div>
            </Link>
        </div>
    );
}

export default ProductsCart;