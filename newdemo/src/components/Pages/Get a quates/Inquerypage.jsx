import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

export default function ContactForm4() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-4 py-10 md:py-20">
      
      {/* Left Panel - Image and Social */}
      <div
        className="md:w-1/2 w-full bg-blue-900 text-white rounded-lg overflow-hidden shadow-lg mb-10 md:mb-0 md:mr-6"
        data-aos="fade-up"
      >
        <img
          src="https://www.neksoftconsultancy.com/wp-content/uploads/2022/08/staff-05.jpg"
          alt="Contact"
          className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="p-6 text-center">
          <h2 className="text-lg font-semibold mb-4">Social profiles</h2>
          <div className="flex justify-center space-x-6 text-blue-100">
            <a href="#" className="hover:text-white transition duration-300">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div
        className="md:w-1/2 w-full"
        data-aos="fade-down"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in touch!</h1>
        <p className="text-gray-600 mb-8">
          Have a question or need assistance? Feel free to reach out to us. We’re here to support you.
        </p>

        <form className="space-y-4">
          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First"
              className="w-full md:w-1/2 p-3 border rounded-md focus:outline-none focus:ring hover:shadow-md"
              required
            />
            <input
              type="text"
              placeholder="Last"
              className="w-full md:w-1/2 p-3 border rounded-md focus:outline-none focus:ring hover:shadow-md"
              required
            />
          </div>

          {/* Phone and Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="🇮🇳 081234 56789"
              className="w-full md:w-1/2 p-3 border rounded-md focus:outline-none focus:ring hover:shadow-md"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full md:w-1/2 p-3 border rounded-md focus:outline-none focus:ring hover:shadow-md"
              required
            />
          </div>

          {/* Services and Software Products */}
          <div className="flex flex-col md:flex-row gap-4">
            <select
              className="w-full md:w-1/2 p-3 border rounded-md focus:outline-none focus:ring hover:shadow-md"
              required
            >
              <option>Website Solution</option>
              <option>Mobile App</option>
              <option>Cloud Services</option>
            </select>
            <select
              className="w-full md:w-1/2 p-3 border rounded-md focus:outline-none focus:ring hover:shadow-md"
              required
            >
              <option>Company Resource Management</option>
              <option>CRM</option>
              <option>ERP</option>
            </select>
          </div>

          {/* Message Textarea */}
          <div>
            <textarea
              placeholder="Message"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring hover:shadow-md"
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-all shadow-md w-full sm:w-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
