import React from "react";
import './Items.css';
import ProductsCart  from "../products_card/ProductsCart";
import data_product from "../Asserts/data"
 
const Items = () => {
    return (
        <div className="allproducts">
            <h3>COLLECTIONS</h3>
            <h1>All Products</h1>
            <h4>12 products</h4>
            <div className="items">
                {data_product.map((item,i) => {
                        return < ProductsCart key={i} image={item.image} id={item.id} name={item.name} price={item.price}/>
                }) }

            </div>
        </div>
    );
}

export default Items;