import { motion } from "framer-motion";
import profilePic from "../assets/princeprofilepic.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 18 } },
};

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      className="bg-white py-10 px-4 md:px-0"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="max-w-3xl mx-auto flex flex-col items-center text-center"
        variants={containerVariants}
      >
        <motion.img
          src={profilePic}
          alt="Prince Kumar profile"
          className="w-32 h-32 rounded-full shadow-lg mb-4 object-cover border-4 border-blue-500"
          variants={itemVariants}
        />
        <motion.h2
          className="text-3xl font-bold text-blue-600 mb-2"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        <motion.p className="text-gray-700 text-lg mb-4" variants={itemVariants}>
          Hi! I'm{" "}
          <span className="font-semibold text-blue-600">Prince Kumar</span>, a
          passionate web developer with a strong foundation in MERN stack and
          modern JavaScript frameworks. I love building beautiful, responsive,
          and user-friendly web applications. My journey in tech is driven by
          curiosity, creativity, and a desire to solve real-world problems
          through code.
        </motion.p>
        <motion.p className="text-gray-600" variants={itemVariants}>
          I enjoy collaborating with teams, learning new technologies, and
          continuously improving my skills. When I'm not coding, you can find me
          exploring new tech blogs, working on side projects, or enjoying a good
          cup of coffee.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
