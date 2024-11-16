import React, { createContext, useState, useContext } from 'react';

// Create a Context for Cart
export const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // Increase quantity if product already in cart
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // Add new product to cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Function to clear the entire cart
  const clearCart = () => setCart([]);

  // Utility functions for cart calculations
  const cartUtils = {
    calculateTotal: () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    calculateShipping: () => cart.reduce((total, item) => total + item.shipping, 0),
    calculateGrandTotal: () => {
      const total = cartUtils.calculateTotal();
      const shipping = cartUtils.calculateShipping();
      return total + shipping;
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        calculateTotal: cartUtils.calculateTotal,
        calculateShipping: cartUtils.calculateShipping,
        calculateGrandTotal: cartUtils.calculateGrandTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
