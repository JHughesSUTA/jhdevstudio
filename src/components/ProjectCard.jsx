// import artGalleryImage from "../assets/images/art-gallery-screenshot.jpg";
// import sunnysideImage from "../assets/images/sunnyside-screenshot.jpg";
// import ticTacToeImage from "../assets/images/tictactoe-screenshot.jpg";
import { IoMdOpen } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, image, liveUrl, githubUrl }) => {
  return (
    <article className="card__article">
      <img src={image} alt="image" className="card__img" />

      <div className="card__data">
        <div>
          <h3 className="card__title">{title}</h3>
          <span className="card__description">{description}</span>
        </div>
        <div>
          <a href={liveUrl} className="card__button" target="_blank">
            <IoMdOpen size="25px" />
          </a>
          <a href={githubUrl} className="card__button" target="_blank">
            <FaGithub size="25px" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
