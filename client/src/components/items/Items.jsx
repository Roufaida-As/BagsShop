import React from "react";
import { useState, useEffect } from "react"; 
import './Items.css';
import ProductsCart  from "../products_card/ProductsCart";
// import data_product from "../Asserts/data"
 
const Items = () => {

    const [products, setProducts] = useState([]);


     // Fetch products from the API
     useEffect(() => {
        fetch("http://localhost:3002/api/products/") 
            .then(response => response.json())
            .then(data => setProducts(data.data.products))
            .catch(error => console.error("Error fetching products:", error));
    }, []);
   

    return (
        <div className="allproducts">
            <h3>COLLECTIONS</h3>
            <h1>All Products</h1>
            <h4>{products.length} products</h4>
            <div className="items">
                {products.map((item,i) => {
                        return < ProductsCart key={i} image={item.image} id={item._id} name={item.name} price={`${item.price} DA`}/>
                }) }

            </div>
        </div>
    );
}

export default Items;