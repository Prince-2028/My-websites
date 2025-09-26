import { motion } from "framer-motion";

const internshipDetails = {
  title: "Software Development Intern",
  period: "Jan 2025 – Jun 2025 (6 Months)",
  company: "ChessVanguard",
  description: `Responsibilities & Achievements:
• Developed and maintained a chess-based learning platform with responsive web interfaces using React.js,Meterial UI , HTML, and CSS.
• Implemented backend APIs with Node.js, Express.js, and MongoDB to manage user accounts, class details, and tournament data.
• Built secure user authentication and profile management features for both students and teachers.
• Designed and integrated attendance tracking and scheduling modules to streamline class management.
• Developed a centralized dashboard for real-time class updates, tournament schedules, and performance tracking.
• Automated IRCTC train ticket booking via a custom Chrome extension to auto-fill passenger details and speed up reservations.
• Gained full-stack development experience from requirement analysis, database design, backend integration, to deployment.`,
  skills: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Bootstrap",
    "Git & GitHub",
    "REST API",
    "Chrome Extensions",
    "Figma"
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

const InternshipExperience = () => (
  <motion.section
    id="InternshipExperience"
    className="py-20 bg-gradient-to-b from-gray-50 to-gray-100"
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.2 }}
    variants={containerVariants}
  >
    <motion.div className="container mx-auto px-6" variants={containerVariants}>
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-16"
        variants={itemVariants}
      >
        Internship Experience
      </motion.h2>

      <motion.div
        className="relative max-w-4xl mx-auto border-l-2 border-gray-300 space-y-10"
        variants={containerVariants}
      >
        <motion.div className="relative pl-10 pb-10" variants={itemVariants}>
          <span className="absolute left-[-9px] top-2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg"></span>
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h4 className="text-xl font-semibold text-gray-900">
                {internshipDetails.title} @ {internshipDetails.company}
              </h4>
              <span className="text-sm text-gray-500">
                {internshipDetails.period}
              </span>
            </div>
            <p className="text-gray-700 mb-4 whitespace-pre-line leading-relaxed">
              {internshipDetails.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {internshipDetails.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100"
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

export default InternshipExperience;
