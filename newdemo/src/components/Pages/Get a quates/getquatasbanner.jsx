import React from "react";

const ContactUsBanner = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden  fixed ">
      {/* Background Image */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS797bQus_zEkR-Cbthij908qUcE4XXgeC0DRrT2JemCRhHphaw" // Replace with actual image path or URL
        alt="Contact Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div> */}

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get a Quates</h1>
        <p className="text-lg md:text-xl font-medium">
          Unleashing the Power of Technology Globally
        </p>
      </div>
    </div>
  );
};

export default ContactUsBanner;
