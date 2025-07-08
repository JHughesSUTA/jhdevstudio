// import "./ProjectSection.scss";
import "./ProjectSection2.scss";
import artGalleryImage from "../assets/images/art-gallery-screenshot.jpg";
import sunnysideImage from "../assets/images/sunnyside-screenshot.jpg";
import ticTacToeImage from "../assets/images/tictactoe-screenshot.jpg";
import studentFilterImage from "../assets/images/student-filter-screenshot.jpg";
import ProjectCard from "./ProjectCard";
import Marquee from "./Marquee";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const cards = [
  {
    title: "Modern Art Gallery Website",
    description:
      "Challenge from Frontend Mentor. Built with HTML, JavaScript and Sass",
    image: artGalleryImage,
    liveUrl: "https://jhughessuta.github.io/art-gallery-website/",
    githubUrl: "https://github.com/JHughesSUTA/art-gallery-website",
  },
  {
    title: "Tic Tac Toe",
    description: "Tic Tac Toe game built with React, TypeScript, Sass",
    image: ticTacToeImage,
    liveUrl: "https://jhughessuta.github.io/tic-tac-toe-25/",
    githubUrl: "https://github.com/JHughesSUTA/tic-tac-toe-25",
  },
  {
    title: "Sunnyside Agency Landing Page",
    description:
      "Demo website built with vanilla JS, CSS, and HTML. Designs from Frontend Mentor",
    image: sunnysideImage,
    liveUrl: "https://jhughessuta.github.io/sunnyside-agency-landing-page/",
    githubUrl: "https://github.com/JHughesSUTA/sunnyside-agency-landing-page",
  },
  {
    title: "Students Filter",
    description: "Demo react app",
    image: studentFilterImage,
    liveUrl: "https://github.com/JHughesSUTA/demo-students-filter",
    githubUrl: "https://jhughessuta.github.io/demo-students-filter/",
  },
];

const ProjectsSection = () => {
  var settings = {
    className: "center",
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="projects" className="projects">
      <div className="container projects-container">
        <h2>Demo Projects</h2>
        <div className="containerz">
          {/* <h2>Projects</h2> */}
          <div
            className="card__container"
            style={{ maxWidth: "95%", marginLeft: "auto", marginRight: "auto" }}
          >
            <Slider {...settings}>
              {cards.map((card, index) => (
                <ProjectCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  liveUrl={card.liveUrl}
                  githubUrl={card.githubUrl}
                />
              ))}
            </Slider>
          </div>
        </div>

        <Marquee />
      </div>
    </section>
  );
};

export default ProjectsSection;
