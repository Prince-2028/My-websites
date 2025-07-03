import { motion } from "framer-motion";

const chessVanguard = {
  title: "ChessVanguard ",
  period: "2025",
  description: `Built and launched "ChessVanguard", a full-stack chess-based learning and playing platform.
Developed core modules including the admin dashboard, teacher panel, and real-time gameplay interface.
Designed the database structure for user profiles, lessons, and match histories.
Collaborated with a small team to ensure responsive design, clean UI/UX, and seamless functionality.
This project enhanced my technical skills and gave me real-world, team-oriented development experience.`,
  skills: ["React", "Node.js", "MongoDB", "Type Script", "UI/UX"],
};

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

const Experience = () => (
  <motion.section
    id="Experience"
    className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.2 }}
    variants={containerVariants}
  >
    <motion.div
      className="container mx-auto px-8"
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-extrabold text-blue-800 mb-12 text-center"
        variants={itemVariants}
      >
        First real world Experience
      </motion.h2>
      <motion.div
        className="relative border-l-4 border-blue-600 max-w-3xl mx-auto space-y-10"
        variants={containerVariants}
      >
        <motion.div className="relative pl-10 pb-8" variants={itemVariants}>
          <span className="absolute left-0 top-2 w-4 h-4 bg-blue-600 border-4 border-white rounded-full shadow-lg"></span>
          <motion.div
            className="bg-white rounded-lg shadow p-6"
            variants={itemVariants}
          >
            <h4 className="text-xl font-bold text-blue-800 mb-1">
              {chessVanguard.title}
            </h4>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <span className="text-gray-500 text-sm">
                {chessVanguard.period}
              </span>
            </div>
            <p className="text-gray-700 mb-2 whitespace-pre-line">
              {chessVanguard.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {chessVanguard.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  </motion.section>
);

export default Experience;
