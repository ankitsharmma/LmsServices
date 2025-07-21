import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Business Website",
    description:
      "Turn your site into a revenue driver with Neksoft’s website design services.",
    image: "https://img.freepik.com/free-vector/modern-gradient-landing-page-with-illustrations-template_23-2148261874.jpg?ga=GA1.1.1039965199.1713434742&semt=ais_items_boosted&w=740", // Replace with actual path
    buttonText: "More Information",
  },
  {
    title: "E-Commerce Website",
    description:
      "Ecommerce encompasses online buying and selling of goods/services.",
    image: "https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688502.jpg?ga=GA1.1.1039965199.1713434742&semt=ais_items_boosted&w=740", // Replace with actual path
    buttonText: "Learn more",
  },
  {
    title: "Web Portal Development",
    description:
      "We design web portals that enhance user experience and maximize functionality.",
    image: "https://img.freepik.com/free-photo/content-management-system-strategy-cms-concept_53876-124877.jpg?ga=GA1.1.1039965199.1713434742&semt=ais_items_boosted&w=740", // Replace with actual path
    buttonText: "Learn more",
  },
];

export default function WebsiteServicescard() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="px-4 py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-[#0B0F29] shadow-md shadow-blue-500/100 rounded-2xl overflow-hidden hover:shadow-2xl  transition-all duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2 text-gray-100">
                {service.title}
              </h3>
              <p className="text-gray-100 mb-6">{service.description}</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full inline-flex items-center gap-2 hover:bg-blue-700 transition">
                {service.buttonText} <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
