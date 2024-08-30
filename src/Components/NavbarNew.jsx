import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import logo from "../assests/Capture (2).png";

const NavbarNew = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownTimer, setDropdownTimer] = useState(null);
  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      if (dropdownTimer) {
        clearTimeout(dropdownTimer);
      }
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      const timer = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 200);
      setDropdownTimer(timer);
    }
  };

  const toggleDropdown = () => {
    if (window.innerWidth < 768) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (dropdownTimer) clearTimeout(dropdownTimer);
    };
  }, [isOpen, dropdownTimer]);

  return (
    <header className="w-full sticky top-0 z-50" ref={navRef}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300 text-sm py-2 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div>Contact: +1-234-567-890 | Email: info@company.com</div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo with Home Page Link */}
          <div className="flex items-center">
            <a href="/" aria-label="Home">
              <img
                src={logo}
                alt="Company Logo"
                className="h-10 w-auto rounded-lg"
              />
            </a>
          </div>

          {/* Menu Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#"
              className="text-black text-xl hover:text-red-500 transition-all duration-300 tracking-wide font-medium"
            >
              About Us
            </a>
            <div
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={dropdownRef}
            >
              <button
                className="text-black text-xl hover:text-red-500 transition-all duration-300 flex items-center tracking-wide font-medium"
                onClick={toggleDropdown}
              >
                Services
                <FiChevronDown
                  className={`ml-1 transform transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-gray-900 bg-opacity-90 border border-red-600 rounded-lg shadow-lg py-2 z-20">
                  <a
                    href="#"
                    className="block px-4 py-2 text-white hover:bg-red-600 hover:bg-opacity-20 transition-all duration-300"
                  >
                    Full Stack Development
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-white hover:bg-red-600 hover:bg-opacity-20 transition-all duration-300"
                  >
                    Web Development
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-white hover:bg-red-600 hover:bg-opacity-20 transition-all duration-300"
                  >
                    Web Design
                  </a>
                </div>
              )}
            </div>
            <a
              href="#"
              className="text-black text-xl hover:text-red-500 transition-all duration-300 tracking-wide font-medium"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="text-black text-xl hover:text-red-500 transition-all duration-300 tracking-wide font-medium"
            >
              Career
            </a>
            <a
              href="#"
              className="text-black text-xl hover:text-red-500 transition-all duration-300 tracking-wide font-medium"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-red-500 transition-all duration-300"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-red-500 animate-slide-in-right">
            <a
              href="#"
              className="block px-4 py-3 text-black hover:text-red-500 transition-all duration-300 tracking-wide"
            >
              About Us
            </a>
            <button
              onClick={toggleDropdown}
              className="block w-full text-left px-4 py-3 text-black hover:text-red-500 transition-all duration-300 tracking-wide"
            >
              Services{" "}
              <FiChevronDown
                className={`inline ml-1 transform transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="pl-4">
                <a
                  href="#"
                  className="block px-4 py-2 text-black hover:text-red-500 hover:bg-opacity-20 transition-all duration-300"
                >
                  Full Stack Development
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-black hover:text-red-500 hover:bg-opacity-20 transition-all duration-300"
                >
                  Web Development
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-black hover:text-red-500 hover:bg-opacity-20 transition-all duration-300"
                >
                  Web Design
                </a>
              </div>
            )}
            <a
              href="#"
              className="block px-4 py-3 text-black hover:text-red-500 transition-all duration-300 tracking-wide"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-black hover:text-red-500 transition-all duration-300 tracking-wide"
            >
              Career
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-black hover:text-red-500 transition-all duration-300 tracking-wide"
            >
              Contact Us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavbarNew;
