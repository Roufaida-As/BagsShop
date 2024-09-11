import React from "react";
import { useState, useEffect } from "react";
import './Items.css';
import ProductsCart from "../products_card/ProductsCart";
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
        <div>
            <h5 id="collections">COLLECTIONS</h5>
            <h3>All Products</h3>
            <div className="allproducts">
                <h6>{products.length} products</h6>
                <div className="items">
                    {products.map((item, i) => {
                        return < ProductsCart key={i} image={item.image} id={item._id} name={item.name} price={`${item.price} DA`} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Items;