import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });

    // Save cart items to localStorage whenever they change
    useEffect(() => {
        if (cartItems.length > 0) { // Only save if there are items
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    }, [cartItems]);

    
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item._id === product._id);
            if (existingItem) {
                // Update quantity if item is already in the cart
                return prevItems.map((item) =>
                    item._id === product._id ? { ...item, qty: item.qty + 1 } : item
                );
            }
            // console.log('Adding new item to cart:', { ...product, qty: 1 });
            return [...prevItems, { ...product, qty: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter((item) => item._id !== id));
    };

    const updateQty = (id, qty) => {
        setCartItems(
            cartItems.map((item) =>
                item._id === id ? { ...item, qty } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQty }}>
            {children}
        </CartContext.Provider>
    );
};
