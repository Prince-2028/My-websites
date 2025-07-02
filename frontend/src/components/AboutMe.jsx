import profilePic from "../assets/princeprofilepic.jpg";

const AboutMe = () => {
  return (
    <section id="about" className="bg-white py-10 px-4 md:px-0">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <img
          src={profilePic}
          alt="Prince Kumar profile"
          className="w-32 h-32 rounded-full shadow-lg mb-4 object-cover border-4 border-blue-500"
        />
        <h2 className="text-3xl font-bold text-blue-600 mb-2">About Me</h2>
        <p className="text-gray-700 text-lg mb-4">
          Hi! I'm{" "}
          <span className="font-semibold text-blue-600">Prince Kumar</span>, a
          passionate web developer with a strong foundation in MERN stack and
          modern JavaScript frameworks. I love building beautiful, responsive,
          and user-friendly web applications. My journey in tech is driven by
          curiosity, creativity, and a desire to solve real-world problems
          through code.
        </p>
        <p className="text-gray-600">
          I enjoy collaborating with teams, learning new technologies, and
          continuously improving my skills. When I'm not coding, you can find me
          exploring new tech blogs, working on side projects, or enjoying a good
          cup of coffee.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
