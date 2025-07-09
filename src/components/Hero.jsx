import "./Hero.scss";
import backgroundImage from "../assets/images/bitmoji-skating.png";
import DecryptedText from "./DecryptedText";
import Squares from "./Squares";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="hero"
        // style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="background-layer">
          <Squares
            speed={0.5}
            squareSize={70}
            direction="diagonal" // up, down, left, right, diagonal
            borderColor="#c5c5c5"
            hoverFillColor="#c5c5c5"
          />
        </div>
        <div className="container">
          <div className="hero__copy">
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
                transition={{ duration: 2, ease: "easeInOut", delay: .75 }}
              >
                &nbsp;I'm James
              </motion.span>
            </h1>
            {/* <p>
            <DecryptedText
              text="Frontend Developer experienced in building responsive, "
              animateOn="view"
              speed={50}
              revealDirection="start"
              max-iterations={10}
              sequential={true}
            />
            <DecryptedText
              text="accessible web interfaces using HTML, CSS and JavaScript. "
              animateOn="view"
              speed={50}
              revealDirection="start"
              max-iterations={10}
              sequential={true}
            />
            <DecryptedText
              text="Known for improving ADA compliance, collaborating closely "
              animateOn="view"
              speed={50}
              revealDirection="start"
              max-iterations={10}
              sequential={true}
            />
            <DecryptedText
              text="with designers, and tackling complex, high-priority tasks. Strong "
              animateOn="view"
              speed={50}
              revealDirection="start"
              max-iterations={10}
              sequential={true}
            />
            <DecryptedText
              text="focus on clean code, usability, and maintainable solutions. "
              animateOn="view"
              speed={50}
              revealDirection="start"
              max-iterations={10}
              sequential={true}
            />
          </p> */}
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
