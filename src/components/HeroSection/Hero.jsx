import "./Hero.scss";
import backgroundImage from "../../assets/images/bitmoji-skating.png";
import { motion } from "motion/react";
import Particles from "./Particles";
import { useTheme } from "../../contexts/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <>
      <section
        id="hero"
        className="hero"
        style={{ backgroundColor: theme === "light" ? "#fff" : "#23272f" }}
      >
        <div className="background-layer">
          <Particles
            key={theme} // Re-mount when theme changes
            particleColors={
              theme === "light" ? ["#000", "#000"] : ["#fff", "#fff"]
            }
            particleCount={500}
            particleSpread={20}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div className="container">
          <div
            className="hero__copy"
            style={{
              backgroundColor: theme === "light" ? "#fff" : "#23272f",
              color: theme === "light" ? "#000" : "#fff",
            }}
          >
            <h1>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                Hi,
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.75 }}
              >
                &nbsp;I'm James
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              Frontend Developer experienced in building responsive, accessible
              web interfaces using HTML, CSS, and JavaScript. Known for
              improving ADA compliance, collaborating closely with designers,
              and tackling complex, high-priority tasks. Strong focus on clean
              code, usability, and maintainable solutions.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="hero__side-image"
          >
            <img src={backgroundImage} alt="" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
