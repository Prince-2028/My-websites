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
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-24 text-center min-h-[60vh] flex flex-col justify-center items-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6 text-blue-800 drop-shadow-sm"
        variants={itemVariants}
      >
        Hi, I'm Prince Kumar
      </motion.h1>
      <motion.p
        className="text-xl text-gray-700 max-w-2xl mx-auto mb-8"
        variants={itemVariants}
      >
        👋 Hi, I’m Prince Kumar – a Full-Stack Web Developer passionate about
        building scalable web applications. I specialize in MERN
      </motion.p>
      <motion.div className="mt-8" variants={itemVariants}>
        <a
          href="./Prince_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-lg shadow-lg"
        >
          View Resume
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
