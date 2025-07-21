import React from 'react';

const Servicesbanner = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat bg-fixed text-white min-h-screen flex items-center"
      style={{
        backgroundImage: "url('https://media.istockphoto.com/id/1212911887/photo/futuristic-digital-block-chain-background.jpg?s=612x612&w=0&k=20&c=tqxa6bZg8XBo_J6h2waJrBZ2UdTeEtzOlRUcM9sDkMc=')",
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-80 z-0" /> */}

      {/* Content */}
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Unleashing the Power of <br /> Technology Globally
          </h1>
          <p className="mt-6 text-lg md:text-xl font-medium text-gray-300">
            “Delivering cutting-edge IT services to empower your business with
            experience, reliability, innovation, and security with every solution we offer.”
          </p>
          <p className="mt-4 text-base md:text-lg text-gray-400 italic">
            — SSL Cloud Services: Elevating businesses through smart, secure, and scalable cloud innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Servicesbanner;
