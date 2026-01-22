import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-cyan-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-black" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-700" /> },
  ];

  return (
    <motion.div
      id="skills"
      className="flex items-center justify-center bg-gray-50"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="bg-white rounded-2xl max-w-4xl w-full shadow-lg p-10 border border-blue-100"
        variants={containerVariants}
      >
        <motion.h2
          className="section-title mb-10"
          variants={itemVariants}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-gray-50 p-4 rounded-xl transition duration-300 shadow hover:shadow-xl"
              variants={itemVariants}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              }}
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-lg font-medium text-gray-700">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
