import React from "react";
import { useState, useEffect } from "react";
import './Items.css';
import ProductsCart from "../products_card/ProductsCart";
import axios from 'axios';
import API_URL from '../../config'

const Items = () => {

    const [products, setProducts] = useState([]);

    // Fetch products from the API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/products/`);
                setProducts(response.data.data.products); // Assuming the products are in response.data.data.products
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
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