import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Github from "./components/Github";
import Contact from "./components/Contect";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe/>
      <Projects />
      <Skills />
      <Experience />
      <Github />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
