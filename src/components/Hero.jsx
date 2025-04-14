import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Hi, I'm Prince Kumar
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      👋 Hi, I’m Prince Kumar – a Full-Stack Web Developer passionate about building scalable web applications. I specialize in MERN 
      </p>
      <div className="mt-10">
        <a
          href="/princeResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white text-lg font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
