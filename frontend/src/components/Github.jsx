import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

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

const Github = () => {
  return (
    <motion.section
      className="bg-gradient-to-br from-gray-100 to-blue-100 py-2 px-4 text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-extrabold text-gray-800 mb-10"
        variants={itemVariants}
      >
        GitHub Contributions
      </motion.h2>
      <motion.div className="overflow-x-auto mb-16" variants={itemVariants}>
        <div className="inline-block min-w-full">
          <div className="flex justify-center">
            <GitHubCalendar
              username="Prince-2028"
              blockSize={16}
              blockMargin={6}
              color="#0e76a8"
              fontSize={17}
              showPrivateContributions={true}
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Github;
