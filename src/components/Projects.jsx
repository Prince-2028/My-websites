import React from "react";

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Weather Application</h3>
          <p className="text-gray-600">
            A weather application that provides real-time weather information
            using an API, built with React and Tailwind CSS.
          </p>
          <a
            href="https://wethercastnow.netlify.app/"
            target="_blank"
            className="mt-4 inline-block bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition"
          >
            View
          </a>
        </div>
        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">AI Resume Builder</h3>
          <p className="text-gray-600">
            An AI-powered resume builder that helps users create professional
            resumes by inputting their details, built with React and integrated
            AI features.
          </p>
          <a
            href="https://resumecreateai.netlify.app/"
            target="_blank"
            className="mt-4 inline-block bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition"
          >
            View
          </a>
        </div>
        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">To-do App</h3>
          <p className="text-gray-600">
            A fully functional to-do app with filtering, persistence, and
            beautiful UI, allowing users to manage their tasks efficiently.
          </p>
          <a
            href="https://prince-2028.github.io/Achieve_Aura/"
            target="_blank"
            className="mt-4 inline-block bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition"
          >
            View
          </a>
        </div>

        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">
            Github Profile Analyzer
          </h3>
          <p className="text-gray-600">
            This project also includes a GitHub profile analyzer feature, where
            you can search and explore any user's GitHub profile to view their
            public repositories, commits, and contribution activity in detail.
          </p>
          <a
            href="https://githubanalizer.netlify.app/"
            target="_blank"
            className="mt-4 inline-block bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition"
          >
            View
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
