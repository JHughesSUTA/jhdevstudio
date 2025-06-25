import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import ContactSection from "./components/ContactSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <ContactSection />
      <ToastContainer />
    </>
  );
};

export default App;
