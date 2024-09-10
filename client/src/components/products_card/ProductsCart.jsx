import React from "react";
import './ProductsCart.css';
import fleche from "../Asserts/fleche.png";
const ProductsCart = (props) => {
    return (
        <div className="carts">
            <div className="cart">
                <img src={props.image} alt="" />
                <p>{props.name}</p>
                <h6>{props.price}</h6>
                <button className="btn">Add to cart</button>
            </div>
           
            
        
        </div>
    );
}

export default ProductsCart;