import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import contactImg from "../../assets/images/contact.jpg";

const Contact = () => {
  useEffect(() => {
    // Set the page title when the About page is rendered
    document.title = 'Contact Us - E-shop | Stylish & Comfortable Product for Everyone';
  }, []); // Empty dependency array ensures it runs only once when the component mounts




  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configure EmailJS
    const serviceID = "service_e5dpiaf";
    const templateID = "template_0f9l6c6";
    const userID = "sfQs5M296fgneVqIy";

    // Prepare the template parameters for EmailJS
    const templateParams = {
      from_name: formData.name,
      user_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      admin_email: "mdhafizalasad@gmail.com", // Admin's email here
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setFeedbackMessage("Your message has been sent!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
      })
      .catch((error) => {
        console.log("Failed to send email:", error);
        setFeedbackMessage("Failed to send message. Please try again.");
      });
  };

  return (
    <div>
      <section
        className="bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url(${contactImg})`,
          backgroundSize: "cover", // Ensures the image covers the entire area
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-5xl font-bold text-white bg-black bg-opacity-50 p-4 rounded-lg">
          Contact Us
        </h1>
      </section>

      {/* Contact Form Section */}
      <div className="p-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Contact Information */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Get in Touch</h2>
            <p className="text-lg">
              We're here to help. Reach out to us through any of the following
              methods:
            </p>

            <div>
              <h3 className="font-bold text-xl">Phone</h3>
              <p>+123 456 7890</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">Email</h3>
              <p>contact@example.com</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">Postal Address</h3>
              <p>123 Main St, Suite 500, City, Country</p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md"
                rows="5"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Contact Now
              </button>
            </form>
            {feedbackMessage && (
              <p className="mt-4 text-center text-green-500">
                {feedbackMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
