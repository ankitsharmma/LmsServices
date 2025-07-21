import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/ssl1.png";

const navItems = [
  { name: "Home", href: "/#home" },
  { name: "Courses", href: "/Cources-pages" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="iWay" className="h-12 w-auto" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md font-semibold space-x-1">
              {/* <a
                href="/register"
                className="hover:text-blue-600"
              >
                Register
              </a>
              <span>/</span> */}
              <a
                href="/login"
                className="hover:text-blue-600"
              >
                Login
              </a>
            </div>
            <a
              href="/Get-a-Quote"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 font-semibold"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMobileMenuOpen(false)}>
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <nav className="flex flex-col space-y-4 px-6">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="text-gray-700 hover:text-blue-600"
            >
              {item.name}
            </a>
          ))}

         {/* Right Side Buttons (Desktop) */}
<div className="hidden md:flex items-center space-x-4">
  <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md font-semibold space-x-1 mr-10">
    {/* <a
      href="/register"
      className="hover:text-blue-600"
    >
      Register
    </a>
    <span>/</span> */}
    <a
      href="/login"
      className="hover:text-blue-600"
    >
      Login
    </a>
  </div>
  <a
    href="/Get-a-Quote"
    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 font-semibold"
  >
    Get a Quote
  </a>
</div>
          {/* CTA Button */}
          <a
            href="/Get-a-Quote"
            className="block text-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Get a Quote
          </a>
        </nav>
      </div>

      {/* Spacer */}
      <div className="h-0 md:h-0" />
    </>
  );
}

export default Header;
