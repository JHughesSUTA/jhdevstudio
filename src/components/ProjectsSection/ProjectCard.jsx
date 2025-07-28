import { IoMdOpen } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import Tag from "./Tag";
import { useEffect, useRef } from "react";

const ProjectCard = ({
  title,
  description,
  image,
  liveUrl,
  githubUrl,
  tags,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    // Check if this card is in a cloned slide
    const isCloned = cardRef.current?.closest(".slick-cloned");

    if (isCloned) {
      // Remove from tab order if it's a cloned slide
      const buttons = cardRef.current.querySelectorAll(".card__button");
      buttons.forEach((button) => {
        button.setAttribute("tabindex", "-1");
      });
    }
  }, []);
  return (
    <article ref={cardRef} className="card__article">
      <img src={image} alt="image" className="card__img" />

      <div className="card__data">
        <div>
          <h3 className="card__title">{title}</h3>
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
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
