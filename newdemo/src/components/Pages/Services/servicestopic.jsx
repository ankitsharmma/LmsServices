import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicesTopic() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat px-6 md:px-12 lg:px-20 py-20 text-white"
      style={{ backgroundImage: "url('/images/bg-ai.jpg')" }}
    >
      <div className="absolute inset-0 bg-blue-800 bg-opacity-60"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          data-aos="fade-up"
        >
          Transform Your Businesses Through{" "}
          <span className="text-blue-400">AI–Integrated</span> Solutions
        </h1>

        <p
          className="mt-6 text-xl sm:text-2xl text-gray-100 font-medium"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          With focus on turning ideas into actions
        </p>

        <p
          className="mt-6 text-base sm:text-lg text-gray-200"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Collaborate with our AI software development firm to make smarter decisions,
          foster purposeful innovation, and drive sustainable growth.
        </p>

        <p
          className="mt-4 text-base sm:text-lg text-gray-200"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          At <span className="font-semibold text-white">SSLCloud</span>, we offer
          premium end-to-end Artificial Intelligence services tailored for modern enterprises.
          From strategy to implementation, our solutions are designed to streamline operations and
          maximize business efficiency. With our deep expertise, we ensure a smooth and seamless AI
          adoption journey that aligns with your goals.
        </p>

        <p
          className="mt-6 text-lg text-blue-300 font-semibold"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          SSLCloud – Empowering intelligence at scale, built for the future.
        </p>
      </div>
    </section>
  );
}
