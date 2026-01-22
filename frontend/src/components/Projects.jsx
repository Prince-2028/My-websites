import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white text-center">
      <motion.h2
        className="text-3xl font-bold mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Weather Application */}
        <motion.div
          className="border p-6 rounded-lg shadow hover:shadow-lg transition"
          variants={cardVariants}
          whileHover={{
            scale: 1.04,
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          }}
        >
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
        </motion.div>
        {/* AI Resume Builder */}
        <motion.div
          className="border p-6 rounded-lg shadow hover:shadow-lg transition"
          variants={cardVariants}
          whileHover={{
            scale: 1.04,
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          }}
        >
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
        </motion.div>
        {/* To-do App */}
        <motion.div
          className="border p-6 rounded-lg shadow hover:shadow-lg transition"
          variants={cardVariants}
          whileHover={{
            scale: 1.04,
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          }}
        >
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
        </motion.div>
        {/* Github Profile Analyzer */}
        <motion.div
          className="border p-6 rounded-lg shadow hover:shadow-lg transition"
          variants={cardVariants}
          whileHover={{
            scale: 1.04,
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          }}
        >
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
        </motion.div>
        {/* IRCTC Extension */}
        <motion.div
          className="border p-6 rounded-lg shadow hover:shadow-lg transition"
          variants={cardVariants}
          whileHover={{
            scale: 1.04,
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          }}
        >
          <h3 className="text-xl font-semibold mb-2">IRCTC Extension</h3>
          <p className="text-gray-600">
            A smart browser extension designed specifically for IRCTC users. It
            saves frequent passenger data and automatically fills it during
            booking.
            <br />
            <br />
          </p>
          <a
            href="https://chromewebstore.google.com/detail/fmbodhmoimogpgihmkfepgjleceojaeh?utm_source=item-share-cb"
            target="_blank"
            className="mt-4 inline-block bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition"
          >
            View
          </a>
        </motion.div>
        {/* Design Portfolio */}
        <motion.div
          className="border p-6 rounded-lg shadow hover:shadow-lg transition"
          variants={cardVariants}
          whileHover={{
            scale: 1.04,
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          }}
        >
          <h3 className="text-xl font-semibold mb-2">Design Portfolio</h3>
          <p className="text-gray-600">
            A creative collection of UI/UX design projects including responsive
            web pages, mobile app screens, and branding layouts. Built with a
            focus on modern aesthetics and user-centered experience.
            <br />
            <br />
          </p>
          <a
            href="https://designportfoliome.netlify.app/"
            target="_blank"
            className="mt-4 inline-block bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition"
          >
            View
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
