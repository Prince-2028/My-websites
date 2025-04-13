import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Prince Kumar</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        A passionate Web Developer skilled in React, Tailwind CSS and modern web technologies. I build fast and responsive web apps.
      </p>
      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        View My Work
      </button>
    </section>
  );
};

export default Hero;