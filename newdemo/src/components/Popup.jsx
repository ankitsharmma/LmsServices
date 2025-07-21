import React, { useEffect, useState } from "react";
import { X, BadgeCheck } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700 });
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-center animate-[wiggle_0.3s_ease-in-out]"
        data-aos="zoom-in"
      >
        {/* Close Icon */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
          Biggest Democracy Ka Biggest Sale!
        </h2>

        {/* Badge with Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative w-28 h-28 flex items-center justify-center rounded-full bg-yellow-400 shadow-inner">
            <div className="flex flex-col items-center justify-center">
              <BadgeCheck size={28} className="text-orange-800 mb-1" />
              <span className="text-lg font-bold text-orange-800">10% OFF</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-700 mb-6 px-2 leading-relaxed">
          💡 Future-Proof Your Career! SSL Cloud DevOps Course @ ₹12,999! 💡 <br />
          Invest in your skills for less than the cost of a smartphone! <br />
          Our industry-led DevOps course is now available at just ₹12,999. Learn cloud
          automation, CI/CD pipelines, Docker, Kubernetes, and more — all designed to
          make you job-ready. <br />
          Hurry! This price won’t last long. Enroll now and transform your future!
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/Cources-pages"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition"
          >
            View Courses
          </a>
          <a
            href="https://sslcloud.in/internships"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-green-500 text-green-500 px-5 py-2 rounded-md hover:bg-green-50 transition"
          >
            View Internships
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
