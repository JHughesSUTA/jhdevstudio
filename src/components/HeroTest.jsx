import "./Hero.scss";
import backgroundImage from "../assets/images/bitmoji-skating.png";
import DecryptedText from "./DecryptedText";
import TestBlob from "./TestBlob";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div
          className="blob-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <TestBlob />
          <div style={{position: "absolute"}}>
            <h1>Hi, I'm James</h1>

            <p>
              Frontend Developer experienced in building responsive, accessible
              web interfaces using HTML, CSS, and JavaScript. Known for
              improving ADA compliance, collaborating closely with designers,
              and tackling complex, high-priority tasks. Strong focus on clean
              code, usability, and maintainable solutions.
            </p>
          </div>
        </div>

        <div className="hero__side-image">
          <img src={backgroundImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
