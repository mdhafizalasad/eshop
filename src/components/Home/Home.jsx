import React, { useEffect, useState } from "react";
import banner from "../../assets/banner.jpg";
import { Link } from "react-router-dom";
import RatingStars from "../../components/RatingStars/RatingStars"; // Import RatingStars component
import { FaRegNewspaper, FaStar, FaTag } from "react-icons/fa"; // Import icons
import mensFashionImg from "../../assets/images/mens-fashion.jpg";
import womensFashionImg from "../../assets/images/womens-fashion.jpg";
import saleItemsImg from "../../assets/images/sale-items.jpg";
import accessoriesImg from "../../assets/images/accessories.jpg";
import electronicsImg from "../../assets/images/electronics.jpg";
import homeDecorImg from "../../assets/images/home-decor.jpg";
import kidsFashionImg from "../../assets/images/kids-fashion.jpg";
import shoesImg from "../../assets/images/shoes.jpg";
import NewsletterSection from "../../components/NewsletterSection/NewsletterSection";


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const fallbackImg =
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg";

  useEffect(() => {
    document.title = "Home"; // Set the page title
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/products.json"); // Fetching from public folder
      const jsonData = await response.json();
      setProducts(jsonData.slice(0, 6)); // Take only the first 6 products
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  return (
    <div className="my-5 p-10">
      {/* E-commerce Banner Section */}
      <div className="relative bg-gradient-to-r from-blue-500 to-blue-300 text-white p-10 rounded-lg shadow-lg mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Welcome to the Grand Sale!
            </h2>
            <p className="text-lg mb-6">
              Enjoy up to 50% off on selected items. Do not miss out on these
              exclusive deals!
            </p><Link to="/product">
            <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded hover:bg-gray-200">
              Shop Now
            </button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src={banner}
              alt="E-commerce Sale"
              className="w-[600px] h-[500px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      {/* InfoCard Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Card 1 */}
        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all">
          <div className="flex items-center mb-4">
            <FaRegNewspaper className="text-3xl mr-4" />
            <h3 className="text-2xl font-semibold">New Arrivals</h3>
          </div>
          <p className="text-lg">
            Check out our latest collection and be the first to grab your
            favorites.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all">
          <div className="flex items-center mb-4">
            <FaStar className="text-3xl mr-4" />
            <h3 className="text-2xl font-semibold">Best Sellers</h3>
          </div>
          <p className="text-lg">
            Explore our most popular items loved by customers around the world.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all">
          <div className="flex items-center mb-4">
            <FaTag className="text-3xl mr-4" />
            <h3 className="text-2xl font-semibold">Special Discounts</h3>
          </div>
          <p className="text-lg">
            Donot miss our limited-time discounts and save big on your
            purchases.
          </p>
        </div>
      </div>

      {/* Product Section */}
      <div className="my-10">
        <h2 className="text-2xl font-bold mb-5">Our Top Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
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
                <div className="flex items-center justify-center mb-4">
                  Rating: <RatingStars rating={product.ratings || 0} />
                </div>
                <p className="text-gray-900 font-bold text-center">Price: ${product.price}
                </p>
                
                
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

      {/* Explore Our Collections Section */}
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-5 text-center">
          Explore Our Collections
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Collection 1 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <Link to="/product">
              <div
                className="bg-cover bg-center h-60"
                style={{ backgroundImage: `url(${mensFashionImg})` }}
              >
                <div className="bg-black bg-opacity-50 flex items-center justify-center h-full text-white p-4 group-hover:bg-opacity-60 transition duration-300">
                  <h3 className="text-3xl font-bold group-hover:text-yellow-500 transition duration-300">
                    Men's Fashion
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          {/* Collection 2 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <Link to="/product">
              <div
                className="bg-cover bg-center h-60"
                style={{ backgroundImage: `url(${womensFashionImg})` }}
              >
                <div className="bg-black bg-opacity-50 flex items-center justify-center h-full text-white p-4 group-hover:bg-opacity-60 transition duration-300">
                  <h3 className="text-3xl font-bold group-hover:text-yellow-500 transition duration-300">
                    Women's Fashion
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          {/* Collection 3 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <Link to="/product">
              <div
                className="bg-cover bg-center h-60"
                style={{ backgroundImage: `url(${accessoriesImg})` }}
              >
                <div className="bg-black bg-opacity-50 flex items-center justify-center h-full text-white p-4 group-hover:bg-opacity-60 transition duration-300">
                  <h3 className="text-3xl font-bold group-hover:text-yellow-500 transition duration-300">
                    Accessories
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          {/* Collection 4 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <Link to="/product">
              <div
                className="bg-cover bg-center h-60"
                style={{ backgroundImage: `url(${saleItemsImg})` }}
              >
                <div className="bg-black bg-opacity-50 flex items-center justify-center h-full text-white p-4 group-hover:bg-opacity-60 transition duration-300">
                  <h3 className="text-3xl font-bold group-hover:text-yellow-500 transition duration-300">
                    Sale Items
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          {/* Collection 5 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <Link to="/product">
              <div
                className="bg-cover bg-center h-60"
                style={{ backgroundImage: `url(${electronicsImg})` }}
              >
                <div className="bg-black bg-opacity-50 flex items-center justify-center h-full text-white p-4 group-hover:bg-opacity-60 transition duration-300">
                  <h3 className="text-3xl font-bold group-hover:text-yellow-500 transition duration-300">
                    Electronics
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          {/* Collection 6 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <Link to="/product">
              <div
                className="bg-cover bg-center h-60"
                style={{ backgroundImage: `url(${homeDecorImg})` }}
              >
                <div className="bg-black bg-opacity-50 flex items-center justify-center h-full text-white p-4 group-hover:bg-opacity-60 transition duration-300">
                  <h3 className="text-3xl font-bold group-hover:text-yellow-500 transition duration-300">
                    Home Decor
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          {/* Collection 7 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <Link to="/product">
              <div
                className="bg-cover bg-center h-60"
                style={{ backgroundImage: `url(${kidsFashionImg})` }}
              >
                <div className="bg-black bg-opacity-50 flex items-center justify-center h-full text-white p-4 group-hover:bg-opacity-60 transition duration-300">
                  <h3 className="text-3xl font-bold group-hover:text-yellow-500 transition duration-300">
                    Kids' Fashion
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          {/* Collection 8 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <Link to="/product">
              <div
                className="bg-cover bg-center h-60"
                style={{ backgroundImage: `url(${shoesImg})` }}
              >
                <div className="bg-black bg-opacity-50 flex items-center justify-center h-full text-white p-4 group-hover:bg-opacity-60 transition duration-300">
                  <h3 className="text-3xl font-bold group-hover:text-yellow-500 transition duration-300">
                    Shoes
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div>
        {/* Other components */}
        <NewsletterSection />
        {/* Other components */}
      </div>


    </div>
  );
};

export default Home;
