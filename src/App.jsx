import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Github from "./components/Github";
import Contact from "./components/Contect";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Github />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
