import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed z-50 w-full top-0 transition-all duration-300 ease-in ${
        isScrolled ? "bg-green-800 p-5 md:p-2" : "bg-slate-100 p-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Navbar Links for Larger Screens */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#home"
            className={`transition-all py-2 rounded ${
              isScrolled
                ? "text-white hover-lines px-5"
                : "text-green-500 px-3 hover-line"
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`transition-all px-3 py-2 ${
              isScrolled
                ? "text-white hover-lines"
                : "text-green-500 px-3 hover-line"
            }`}
          >
            About
          </a>
          <a
            href="#skill"
            className={`transition-all px-3 py-2 ${
              isScrolled
                ? "text-white hover-lines"
                : "text-green-500 px-3 hover-line"
            }`}
          >
            Skill
          </a>
        </div>

        {/* Social Links for Larger Screens */}
        <div className="hidden md:flex space-x-6">
          <a
            href="https://www.instagram.com/"
            className={`text-xl ${
              isScrolled
                ? "text-white hover:text-pink-600 transition-all duration-300 hover:bg-white px-2 py-1 rounded-full"
                : "text-pink-600 hover:text-pink-800 hover-line transition-all duration-300"
            }`}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://twitter.com/"
            className={`text-xl ${
              isScrolled
                ? "text-white hover:text-blue-500 transition-all duration-300 hover:bg-white px-2 py-1 rounded-full"
                : "text-blue-500 hover:text-gray-300 hover-line transition-all duration-300"
            }`}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://facebook.com/"
            className={`text-xl ${
              isScrolled
                ? "text-white hover:text-blue-900 transition-all duration-300 hover:bg-white px-2 py-1 rounded-full"
                : "text-blue-900 hover:text-gray-300 hover-line transition-all duration-300"
            }`}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://linkedin.com/"
            className={`text-xl ${
              isScrolled
                ? "text-white hover:text-blue-600 transition-all duration-300 hover:bg-white px-2 py-1 rounded-full"
                : "text-blue-600 hover:text-gray-300 hover-line transition-all duration-300"
            }`}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden flex items-center w-full">
          <button
            onClick={toggleMenu}
            className={`text-3xl ${
              isScrolled ? "text-white" : "text-green-800"
            } focus:outline-none`}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
          <h1
            className={`text-xl text-center mx-auto ${
              isScrolled ? "text-white" : "text-green-800"
            } focus:outline-none`}
          >
            Mutiara Portofolio
          </h1>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-slate-100 md:hidden shadow-lg">
            <div className="flex flex-col items-center py-4 space-y-4">
              <a
                href="#home"
                className="text-green-500 text-lg hover:text-green-700"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-green-500 text-lg hover:text-green-700"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#skill"
                className="text-green-500 text-lg hover:text-green-700"
                onClick={toggleMenu}
              >
                Skill
              </a>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.instagram.com/"
                  className="text-pink-600 hover:text-pink-800"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://twitter.com/"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://facebook.com/"
                  className="text-blue-900 hover:text-blue-700"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://linkedin.com/"
                  className="text-blue-600 hover:text-blue-700"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
