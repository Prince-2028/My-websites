import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <section
      id="github"
      className="bg-gradient-to-br from-gray-100 to-blue-100 py-20 px-4 text-center"
    >
      <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
        GitHub Contributions
      </h2>

      {/* GitHub Calendar */}
      <div className="overflow-x-auto mb-16">
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
      </div>

      {/* Chess Development Experience Content */}
      <div className="max-w-4xl mx-auto text-left ">
        <h3 className="text-3xl font-bold text-blue-800 mb-4">
          First Real-World Experience
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          My first real-world development experience was centered around
          building a full-stack Chess-based learning and playing platform. I
          played a key role in developing core modules such as the admin
          dashboard, teacher panel, and the real-time gameplay interface. This
          experience allowed me to work across both frontend and backend, using
          technologies like React, Node.js, and MongoDB to deliver smooth,
          interactive user experiences.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          I was responsible for designing the database structure to handle user
          profiles, lessons, and match histories efficiently. Additionally, I
          collaborated with a small team to ensure responsive design, clean
          UI/UX, and seamless functionality across the platform. This project
          not only enhanced my technical skills but also gave me confidence in
          working in a real-world, team-oriented development environment.
        </p>
      </div>
    </section>
  );
};

export default Github;
