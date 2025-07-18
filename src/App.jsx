import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/HeroSection/Hero";
import ContactSection from "./components/ContactSection/ContactSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Nav />
        <Hero />
        <ProjectsSection />
        <ContactSection />
        <ToastContainer />
      </ThemeProvider>
    </>
  );
};

export default App;
