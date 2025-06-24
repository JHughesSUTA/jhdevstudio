import "./Hero.scss";
import backgroundImage from "../assets/images/bitmoji-skating.png";
import DecryptedText from "./DecryptedText";

const Hero = () => {
  const paragraph =
    "Frontend Developer experienced in building responsive, accessible web interfaces using HTML, CSS and JavaScript. known for improving ADA compliance, collaborating closely with designers, and tackling complex, high-priority tasks. Strong focus on clean code, usability, and maintainable solutions.";

  return (
    <section
      id="hero"
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero__copy container">
        <h1>Hi, I'm James</h1>
        <p>
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
        </p>
        {/* <p>
          Frontend Developer experienced in building responsive, accessible web
          interfaces using HTML, CSS, and JavaScript. Known for improving ADA
          compliance, collaborating closely with designers, and tackling
          complex, high-priority tasks. Strong focus on clean code, usability,
          and maintainable solutions.
        </p> */}
      </div>
    </section>
  );
};

export default Hero;
