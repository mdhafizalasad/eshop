import React from "react";
import bg from "../../assets/images/about.jpg";

const ThankYou = () => {
  return (
    <div 
      className="h-[90vh] overflow-hidden flex flex-col items-center justify-center bg-gray-100 relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      
      <h1 className="text-4xl font-bold mb-4 text-white relative z-10">
        Thank You for Your Purchase!
      </h1>
      <p className="text-lg text-white relative z-10">
        Your order is being processed. We will notify you once it's shipped.
      </p>
    </div>
  );
};

export default ThankYou;
