import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import HeroTest from "./components/HeroTest"
import Marquee from "./components/Marquee";
import ContactSection from "./components/ContactSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectsSection from "./components/ProjectsSection";
import ProjectsSection2 from "./components/ProjectSection-2";
import TestBlob from "./components/TestBlob";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    document.body.classList.toggle("light", !darkMode);
  }, [darkMode]);

  return (
    <>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      {/* <HeroTest /> */}
      <ProjectsSection />
      {/* <ProjectsSection2 /> */}
      <ContactSection />
      <ToastContainer />
    </>
  );
};

export default App;
