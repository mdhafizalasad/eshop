import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import mailImg from "../../assets/images/mail.jpg";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [thankYouMessage, setThankYouMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configure your EmailJS
    const serviceID = "service_e5dpiaf";
    const templateID = "template_0f9l6c6";
    const userID = "sfQs5M296fgneVqIy";

    // Set up template parameters for the email
    const templateParams = {
      user_email: email, // This will send the user's email
      to_email: "mdhafizalasad@gmail.com" // Replace with your email
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setThankYouMessage("Thank you for subscribing!");
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setThankYouMessage("Subscription failed. Please try again.");
      });

    // Clear the input field after sending the email
    setEmail("");
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-lg shadow-lg my-12 mx-auto w-full">
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-lg shadow-lg my-12 max-w-5xl mx-auto">
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Image */}
        <div>
          <img
            src={mailImg} 
            alt="Stay Updated"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
  
        {/* Right Column: Subscription Form */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-4">Stay Connected</h2>
          <h3 className="text-2xl font-semibold mb-2">Get the Latest Updates</h3>
          <p className="text-lg mb-6 leading-relaxed">
            Subscribe to our newsletter for exclusive offers, product news, and more!
          </p>
          
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 rounded-md text-black w-full mb-2"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-800 font-semibold py-3 px-6 rounded-md transition-colors duration-200"
            >
              Subscribe Now
            </button>
          </form>
  
          {/* Thank-You Message */}
          {thankYouMessage && (
            <p className="mt-4 text-lg font-semibold text-green-300">{thankYouMessage}</p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
  
};

export default NewsletterSection;
