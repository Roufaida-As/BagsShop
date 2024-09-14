import React, { useContext, useEffect, useState } from 'react';
import ProductImage from '../components/product_details/productImage';
import ProductInfo from '../components/product_details/productInfo';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import { CartContext } from './../components/cart_slider/CartContext';

const ProductDetails = () => {
    const { id } = useParams(); // Getting the product ID from the URL
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        // Fetch product details using the ID
        fetch(`http://localhost:3002/api/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data.data.product))
            .catch(error => console.error('Error fetching product:', error));
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
                        onAddToCart={() => addToCart(product)}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
