import React from "react";
import { Link } from 'react-router-dom';
import './ProductsCart.css';
const ProductsCart = ({ id, image, name, price })  => {
    return (
        <div className="carts">
            <div className="cart">
                <Link to={`/products/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <img src={`http://localhost:3002${image}`} alt="" />
                    <p>{name}</p>
                    <h6>{price}</h6>
                    <button className="btn">Add to cart</button>
                </Link>
            </div>



        </div>
    );
}

export default ProductsCart;