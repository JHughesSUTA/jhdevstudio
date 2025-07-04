import logo from "../assets/images/logo-black.png";
import { TbMoon, TbMoonStars, TbSunHigh } from "react-icons/tb";

import "./Nav.scss";

const Nav = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <nav id="nav" className="container nav">
        <img src={logo} alt="" width="64px" height="64px" />
        <ul className="nav__links">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <button
          id="dark-mode-button"
          className="nav__dark-mode-button"
          onClick={() => setDarkMode((darkMode) => !darkMode)}
        >
          {darkMode ? <TbMoonStars size="25px" /> : <TbSunHigh size="25px" />}
        </button>
      </nav>
    </>
  );
};

export default Nav;
