import React from "react";

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
          <p className="text-gray-600">A personal portfolio made with React and Tailwind showcasing my skills and projects.</p>
        </div>
        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">To-do App</h3>
          <p className="text-gray-600">A fully functional to-do app with filtering, persistence, and beautiful UI.</p>
        </div>
        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Blog Platform</h3>
          <p className="text-gray-600">A simple blogging platform where users can read and write blogs.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
