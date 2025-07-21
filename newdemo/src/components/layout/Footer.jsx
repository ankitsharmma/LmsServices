import { Twitter, Linkedin, Instagram, Facebook, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../assets/ssl1.png";
import WhatsappButton from "../WhatsappButton";
import Chatbot from "../Chatbot";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-gray-900 py-10 relative">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between">
        <div>
          <img src={logo} alt="Ritten Logo" className="w-32 mb-4" />
          <p className="text-gray-600">373 Civil Linens , PW.D Guest House ,</p>
          <p className="text-gray-600"> Reliance Jio office Pratapgarh UP 23001 , India</p>
          
         
          
          
          <p className="text-gray-600">support@company.com</p>
          <p className="text-gray-600">+91 8299408873 , 9161306023</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-blue-400 transition text-2xl">
              <Twitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400 transition text-2xl">
              <Linkedin />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400 transition text-2xl">
              <Instagram />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400 transition text-2xl">
              <Facebook />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-0 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 md:mt-0">
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 transition"><a href="/">Home</a></li>
              <li className="hover:text-blue-600 transition"><a href="/Our-Team-Members">Our Team</a></li>
              <li className="hover:text-blue-600 transition"><a href="/About-Us-Overview">About Us</a></li>
              <li className="hover:text-blue-600 transition"><a href="/Quality-Assurance">Services</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">More About Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 transition"><a href="/Amf-panel">Cources</a></li>
              <li className="hover:text-blue-600 transition"><a href="/Apfc-panel">Terms & rules</a></li>
              <li className="hover:text-blue-600 transition"><a href="/House-Wires">Instructor</a></li>
              <li className="hover:text-blue-600 transition"><a href="/Servo-Transformer"> Privacy Policy</a></li>
              <li className="hover:text-blue-600 transition"><a href="/Solar-Cables">Join our team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Connect with Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 transition"><a href="/Contact-Us">Contact Us</a></li>
              <li className="hover:text-blue-600 transition"><a href="/Vendor-Registration-Form">Registration</a></li>
              <li className="hover:text-blue-600 transition"><a href="/Career-Opportunities">Careers</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-6">
        © 2025 SSL Cloud Solution. All rights reserved. | Developed By Ankit sharma SSL Cloud Solution <span className="text-xs">®</span>
      </div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 bg-blue-400 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700 z-50 transition"
        >
          <ArrowUp className="text-xl" />
        </button>
      )}
      <Chatbot/>
      <WhatsappButton />

    </footer>
  );
}
