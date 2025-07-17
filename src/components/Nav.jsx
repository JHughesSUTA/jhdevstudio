import "./Nav.scss";
import logo from "../assets/images/logo-black.png";
import { TbMoonStars, TbSunHigh } from "react-icons/tb";
import { motion } from "motion/react";

const Nav = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <motion.nav
        id="nav"
        className="nav"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <div className="container">
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
        </div>
      </motion.nav>
    </>
  );
};

export default Nav;
