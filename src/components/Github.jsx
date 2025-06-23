import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 to-blue-100 py-2 px-4 text-center">
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
    </section>
  );
};

export default Github;
