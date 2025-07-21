import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function WebsiteServices() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="pt-10 min-h-70 px-6 md:px-20 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div data-aos="fade-up" className="max-w-2xl text-center md:text-left">
          <p className="text-indigo-600 font-medium mb-2">Our services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Website Solution Services
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are a highly acclaimed web development firm based in India,
            recognized for our exceptional work and honored with numerous
            awards. Our expertise lies in crafting top-notch websites at
            competitive prices, catering to businesses globally.
          </p>
        </div>

        {/* Right Button */}
        <div data-aos="fade-down" className="md:block">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold cursor-pointer overflow-hidden relative group">
            <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
              Get started
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WebsiteServices;
