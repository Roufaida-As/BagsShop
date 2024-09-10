import React from "react";
import './ProductsCart.css';
const ProductsCart = (props) => {
    return (
        <div className="carts">
            <div className="cart">
                <img src={`http://localhost:3002${props.image}`} alt="" />
                <p>{props.name}</p>
                <h6>{props.price}</h6>
                <button className="btn">Add to cart</button>
            </div>
           
            
        
        </div>
    );
}

export default ProductsCart;