import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext"; // Import CartContext

const Cart = () => {
  const { cart, removeFromCart, calculateTotal, calculateShipping, calculateGrandTotal } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shipping, setShipping] = useState(10); // Example shipping cost, can be fetched from context
  const navigate = useNavigate();

  // Update the total price and shipping whenever the cart changes
  useEffect(() => {
    setTotalPrice(calculateGrandTotal());
  }, [cart, calculateGrandTotal]);

  const handleProceedToCheckout = () => {
    navigate("/thank-you");
  };

  const handleContinueShopping = () => {
    navigate("/product"); // Redirect to the product page
  };

  return (
    <div className="pt-24 px-20 mb-8"> {/* Added margin at the bottom here */}
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {cart.map((product) => (
          <div key={product.id} className="bg-white border p-4 rounded-md shadow-lg flex flex-col ">
            <img
              src={product.img}
              alt={product.name}
              className="w-48 h-48 object-cover mx-auto rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-900 font-bold">Price: ${product.price}</p>
            <p className="text-gray-600">Quantity: {product.quantity}</p>
            
            {/* Show product price, shipping charge, and total price */}
            <p className="text-gray-600 mt-2">Shipping: ${product.shipping || shipping}</p>
            <p className="text-gray-900 font-bold mt-2">
              Total Price: ${(product.price * product.quantity + (product.shipping || shipping)).toFixed(2)}
            </p>
            
            <button
              onClick={() => removeFromCart(product.id)}
              className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-md mt-4 self-center"
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
      
      {/* Show total price and proceed to checkout */}
      <div className="flex justify-between mt-8">
        <p className="text-xl font-bold">Total Price: ${totalPrice.toFixed(2)}</p>
        
        {/* Flex container for buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handleContinueShopping}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Continue Shopping
          </button>
          <button
            onClick={handleProceedToCheckout}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
