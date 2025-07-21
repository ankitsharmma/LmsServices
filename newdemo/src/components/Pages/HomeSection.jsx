import React, { useEffect } from 'react';
import Popup from '../Popup';
import bannerpng2 from '../../assets/bannerpng2.png';

const HomeSection = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }, []);

  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center font-inter">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-15">
          <section className="bg-white overflow-hidden flex flex-col lg:flex-row-reverse items-center">
            {/* Image Section */}
            <div
              className="w-full lg:w-1/2"
              data-aos="fade-top"
              data-aos-duration="1200"
            >
              <img
                src={bannerpng2}
                alt="Banner"
                className="w-full h-64 sm:h-80 lg:h-full object-cover rounded-t-2xl lg:rounded-tr-none lg:rounded-bl-2xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/800x600/CCCCCC/000000?text=Image+Not+Found";
                }}
              />
            </div>

            {/* Content Section */}
            <div
              className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center"
              data-aos="fade-down"
              data-aos-duration="1200"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                  We Provide
                </span>
                <br className="hidden md:block" />
                <span className="text-blue-600">
                  Our World Best IT Training Services
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                SLL Cloud Solution is a leading IT services and support company
                based in Bangalore, India. We provide high-quality services for
                software & website development, network setup, technical
                support, employee training, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/about"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 text-center"
                >
                  Learn More
                </a>
                {/* <a
                  href="/contact-us"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 text-center"
                >
                  Contact Us
                </a> */}
              </div>
            </div>
          </section>
        </div>
      </div>

      <Popup />
    </>
  );
};

export default HomeSection;
