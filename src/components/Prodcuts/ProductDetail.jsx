import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import RatingStars from "../RatingStars/RatingStars";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userRating, setUserRating] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const fallbackImg = "https://via.placeholder.com/300";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/products.json");
        if (!response.ok) throw new Error("Failed to fetch product data.");

        const products = await response.json();
        const foundProduct = products.find((item) => item.id === id);

        if (!foundProduct) {
          setError("Product not found.");
        } else {
          setProduct(foundProduct);
          setUserRating(foundProduct.userRating || 0);
        }
      } catch (error) {
        setError("Error fetching product details.");
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product && product.stock > 0) {
      addToCart(product);
      navigate("/cart");
    }
  };

  const handleRate = (rating) => {
    setUserRating(rating);
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="pt-24 px-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Product Details</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img
            src={product.img || fallbackImg}
            alt={product.name}
            className="w-full max-w-md object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col justify-between">
          <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
          <p className="text-xl font-bold text-gray-900 mb-2">Price: $ {product.price}</p>
          <p className="text-gray-700 mb-4 text-justify"><b>Product Details:</b> {product.description}</p> {/* Product description */}
          <div className="flex items-center mb-4">
            <b>Rating: &nbsp;</b>
            <RatingStars rating={product.ratings || 0} />
          </div>
          <p className="text-yellow-600 mb-4">
            <b>Availability:</b> {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>
          <div className="flex items-center mb-4">
            <p className="mr-2 font-bold">Rate this product:</p>
            <span className="text-yellow-500">
              <RatingStars rating={userRating} onRate={handleRate} />
            </span>
          </div>
          
          {showThankYou && <p className="text-green-600">Thank you for rating!</p>}

          <button
            onClick={handleAddToCart}
            disabled={product.stock <= 0}
            className={`${
              product.stock > 0 ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400"
            } text-white font-semibold py-2 px-4 rounded-md mb-4`}
          >
            {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
