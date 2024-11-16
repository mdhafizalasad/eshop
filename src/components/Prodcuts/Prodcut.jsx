import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RatingStars from "../../components/RatingStars/RatingStars";

const Product = () => {
  const [data, setData] = useState([]);
  const fallbackImg =
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg";

  useEffect(() => {
    document.title = "Our Product Collection";
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/products.json");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="pt-24 px-20">
      <h1 className="text-3xl font-bold text-center mb-8">Our Product Collection</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {data.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md p-4 h-full"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.img || fallbackImg}
                alt={product.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = fallbackImg;
                }}
                className="w-48 h-48 object-cover mx-auto rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-center">{product.name}</h3>
                {/* Rating display using RatingStars component */}
                <div className="flex items-center justify-center mb-4">
                Rating: &nbsp;
                <RatingStars rating={product.ratings || 0} />
              </div>
              <p className="text-gray-900 font-bold text-center">Price: ${product.price}</p>
              
            
            </Link>

            {/* <div className="mt-auto">
              <Link to={`/product/${product.id}`}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full">
                  Buy Now
                </button>
              </Link>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
