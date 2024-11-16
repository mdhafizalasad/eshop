import React, { useEffect } from 'react';
import aboutImg from "../../assets/images/about.jpg";
import team1Img from "../../assets/images/t-1.jpg";
import team2Img from "../../assets/images/t-2.jpg";
import team3Img from "../../assets/images/t-3.jpg";
import { Link } from "react-router-dom";
const About = () => {
    useEffect(() => {
        // Set the page title when the About page is rendered
        document.title = 'About Us - E-shop | Stylish & Comfortable Product for Everyone';
      }, []); // Empty dependency array ensures it runs only once when the component mounts
    

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto max-w-screen-lg px-6">
        {/* About Us Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Welcome to E-shoes, where we offer a wide range of footwear for all occasions. Our
            mission is to provide high-quality shoes at affordable prices, with a focus on customer
            satisfaction. Explore our collections and enjoy a seamless shopping experience.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="bg-white py-12 mb-16 shadow-lg rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center px-8">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600">
                At E-shoes, we believe that shoes are more than just an accessory  they are a
                statement. Our mission is to make stylish and comfortable footwear accessible to
                everyone, no matter their budget.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={aboutImg}
                alt="Mission Image"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality</h3>
              <p className="text-gray-600">
                We prioritize quality in every pair of shoes we offer, ensuring they are durable and
                comfortable.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer-Centric</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We aim to provide exceptional
                service and support.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continually innovate to offer the latest trends in footwear, blending style and
                comfort.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={team1Img}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
              <p className="text-gray-500 mt-4">
                John founded E-shoes with a vision to revolutionize the footwear industry with
                trendy and high-quality shoes.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={team2Img}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Marketing Head</p>
              <p className="text-gray-500 mt-4">
                Jane is responsible for E-shoes' branding and marketing strategies, ensuring we
                reach the right audience.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={team3Img}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Emily Clark</h3>
              <p className="text-gray-600">Product Manager</p>
              <p className="text-gray-500 mt-4">
                Emily leads the product development team, ensuring that our shoes meet the highest
                standards of design and comfort.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="bg-gray-100 py-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-4">
            Have any questions? Reach out to us and our team will be happy to assist you.
          </p>
          <Link to="/contact">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">
            Contact Support
          </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
