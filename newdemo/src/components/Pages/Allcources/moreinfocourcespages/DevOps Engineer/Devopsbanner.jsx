import React, { useState, useEffect } from "react";
import { X } from "lucide-react"; // optional: for a cleaner close icon

const Devopsbanner = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 15, seconds: 0 });
  const [showOffer, setShowOffer] = useState(true);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        clearInterval(countdown);
        return prev;
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  return (
    <div
      className="relative w-full min-h-[400px] md:min-h-[400px] bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/14/17/78/45/240_F_1417784599_JIczg0Tkc7Mc0cyaMVEE7HwX5QyAchFL.jpg')",
      }}
    >
      {/* Background Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-0" /> */}

      {/* Offer Card */}
      {showOffer && (
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-4 py-6 text-center rounded-lg shadow-lg w-4/5 md:w-1/2 z-10 relative animate-fade-in">
          {/* Close Button */}
          <button
            onClick={() => setShowOffer(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
            aria-label="Close offer"
          >
            <X size={20} />
          </button>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Special Offer</h2>
          <p className="text-lg md:text-xl text-gray-500">DevOps</p>
          <div className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg font-bold text-2xl md:text-3xl">
            20% OFF
          </div>
          <div className="mt-4 flex justify-center space-x-4 text-gray-900 text-lg md:text-xl">
            <div className="bg-gray-200 p-3 md:p-4 rounded text-center w-14 md:w-16">
              <p className="font-bold">{timeLeft.hours}</p>
              <p className="text-xs">Hr</p>
            </div>
            <div className="bg-gray-200 p-3 md:p-4 rounded text-center w-14 md:w-16">
              <p className="font-bold">{timeLeft.minutes}</p>
              <p className="text-xs">Min</p>
            </div>
            <div className="bg-gray-200 p-3 md:p-4 rounded text-center w-14 md:w-16">
              <p className="font-bold">{timeLeft.seconds}</p>
              <p className="text-xs">Sec</p>
            </div>
          </div>
        </div>
      )}

      {/* DevOps Engineer Heading */}
      <div className="absolute bottom-6 left-6 text-left text-white z-10">
        <h1 className="text-2xl md:text-4xl font-bold">DevOps Engineer</h1>
      </div>
    </div>
  );
};

export default Devopsbanner;
