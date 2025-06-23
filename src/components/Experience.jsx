
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

const Experience = () => (
  <section id="Experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="container mx-auto px-8">
      <h2 className="text-4xl font-extrabold text-blue-800 mb-12 text-center">
        First real world project
      </h2>
      <div className="relative border-l-4 border-blue-600 max-w-3xl mx-auto space-y-10">
        <div className="relative pl-10 pb-8">
          <span className="absolute left-0 top-2 w-4 h-4 bg-blue-600 border-4 border-white rounded-full shadow-lg"></span>
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-xl font-bold text-blue-800 mb-1">{chessVanguard.title}</h4>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <span className="text-gray-500 text-sm">{chessVanguard.period}</span>
            </div>
            <p className="text-gray-700 mb-2 whitespace-pre-line">{chessVanguard.description}</p>
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
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;