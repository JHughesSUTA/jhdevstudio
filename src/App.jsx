import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/HeroSection/Hero";
import ContactSection from "./components/ContactSection/ContactSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";

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
      <ProjectsSection />
      <ContactSection />
      <ToastContainer />
    </>
  );
};

export default App;
