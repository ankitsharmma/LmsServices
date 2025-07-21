import React from "react";
// import "./App.css";

export default function Websolutionbanner() {
  return (
    <div
      className="relative min-h-120 bg-fixed bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: "url('https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/6010828d33e669bfe53402f9_6002086f72b727fe2401d779_2018-illustration-trends.png')" // Replace with your actual path
      }}
    >
      {/* <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div> */}

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 hover:scale-105 transition duration-300">
          Website Solutions
        </h1>
        <p className="text-lg sm:text-2xl hover:text-blue-300 transition duration-300">
          Unleashing the Power of Technology Globally
        </p>
      </div>
    </div>
  );
}
