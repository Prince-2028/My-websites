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
      className="bg-gray-50 py-20 text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-4"
        variants={itemVariants}
      >
        Hi, I'm Prince Kumar
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 max-w-2xl mx-auto"
        variants={itemVariants}
      >
        👋 Hi, I’m Prince Kumar – a Full-Stack Web Developer passionate about
        building scalable web applications. I specialize in MERN
      </motion.p>
      <motion.div className="mt-10" variants={itemVariants}>
        <a
          href="./PrinceResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white text-lg font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
        >
          View Resume
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
