import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Detect scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-indigo-800 shadow-md py-2" : "bg-indigo-700 py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-light text-white hover:text-lavender transition"
        >
          Job Portal with AI-Based Resume Scanning
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-sm font-light text-white hover:text-cyan transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-sm font-light text-white hover:text-cyan transition duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-sm font-light text-white hover:text-cyan transition duration-200"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-sm font-light text-white hover:text-cyan transition duration-200"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-sm font-light text-white hover:text-cyan transition duration-200"
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
