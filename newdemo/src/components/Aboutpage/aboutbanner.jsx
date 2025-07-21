import React from 'react';

function AboutBanner() {
  return (
    <div className="relative w-full min-h-[70vh] fixed bg-gray-100 flex items-center justify-center">
      {/* Image background container */}
      <div className="absolute inset-0">
        <img
          src="https://media.istockphoto.com/id/1174511028/photo/stack-of-hands-unity-and-teamwork-concept.jpg?s=612x612&w=0&k=20&c=FmY958RnVfGFWZIxC47nYTH3ZWQkMBHil_q0DQxGkfU="
          alt="About Us"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/1200x400/007bff/ffffff?text=Image+Not+Found";
            
          }}
        />
        {/* Dark overlay for better text visibility */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
      </div>

      {/* Centered heading text */}
      <div className="relative z-10 text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center drop-shadow-lg px-4">
        About Us
      </div>
    </div>
  );
}

export default AboutBanner;
