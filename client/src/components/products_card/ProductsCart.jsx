import React from "react";
import { Link } from 'react-router-dom';
import './ProductsCart.css';
const ProductsCart = ({ id, image, name, price }) => {
    return (
        <div className="carts">
            <Link to={`/products/${id}`} style={{ textDecoration: 'none', color: 'black' }}>

                <div className="cart">
                    <img src={`http://localhost:3002${image}`} alt="" />
                    <p>{name}</p>
                    <span>{price}</span>
                    <button className="btn">Add to cart</button>

                </div>
            </Link>
        </div>
    );
}

export default ProductsCart;