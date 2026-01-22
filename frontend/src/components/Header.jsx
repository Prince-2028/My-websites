import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur shadow-md px-6 py-4 sticky top-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-extrabold text-blue-700 tracking-wide drop-shadow-sm">
          Prince Kumar
        </div>
        <nav>
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer transition">
              <a href="#hero">Home</a>
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              <a href="#Experience">Experience</a>
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              <a href="#skills">Skills</a>
            </li>
          </ul>
          {/* Mobile menu */}
          {menuOpen && (
            <ul className="absolute left-0 top-16 w-full bg-white/95 backdrop-blur shadow-lg flex flex-col space-y-4 px-6 py-4 md:hidden z-50 text-gray-700 font-medium rounded-b-xl border-b border-blue-100 animate-fade-in">
              <li
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 cursor-pointer transition"
              >
                <a href="#hero">Home</a>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 cursor-pointer transition"
              >
                <a href="#projects">Projects</a>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 cursor-pointer transition"
              >
                <a href="#Experience">Experience</a>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 cursor-pointer transition"
              >
                <a href="#about">About</a>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 cursor-pointer transition"
              >
                <a href="#skills">Skills</a>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <a
                  href="#contact"
                  className="block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition text-center"
                >
                  Contact
                </a>
              </li>
            </ul>
          )}
        </nav>
        <div className="hidden md:block">
          <a href="#contact" className="btn-primary">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button
            className="text-blue-700 text-2xl"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
