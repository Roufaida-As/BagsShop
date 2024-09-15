import React, { useContext, useEffect, useState } from 'react';
import ProductImage from '../components/product_details/productImage';
import ProductInfo from '../components/product_details/productInfo';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import { CartContext } from './../components/cart_slider/CartContext';
import axios from 'axios';
import API_URL from '../config'

const ProductDetails = () => {
    

    const { id } = useParams(); // Getting the product ID from the URL
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/products/${id}`);
                setProduct(response.data.data.product); // Assuming the product is in response.data.data.product
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProductDetails();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>; // Loading state while fetching data
    }

    return (
        <div className="product-details-container">
            <div className="product-row">
                <div className="product-left">
                    <ProductImage image={product.image} />
                </div>
                <div className="product-right">
                    <ProductInfo
                        title={product.name}
                        price={product.price}
                        description={product.description}
                        //to try the button
                        onAddToCart={() => {
                            addToCart(product),
                                 alert('Added to your cart successfully!')
                                
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
