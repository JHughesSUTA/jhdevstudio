import "./Nav.scss";
import logoBlack from "../assets/images/logo-black.png";
import Logo from "./SVGs/Logo";
import { TbMoonStars, TbSunHigh } from "react-icons/tb";
import { motion } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";

const Nav = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <motion.nav
        id="nav"
        className="nav"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        style={{ backgroundColor: theme === "light" ? "#fff" : "#23272f" }}
      >
        <div className="container">
          {/* <img src={logoBlack} alt="" width="64px" height="64px" /> */}
          <div style={{ maxWidth: "64px" }}>
            <Logo />
          </div>
          <ul className="nav__links">
            <li>
              <a
                style={{
                  color: theme === "light" ? "#000" : "#fff",
                  "--before-bg": theme === "light" ? "000" : "fff",
                }}
                href="#hero"
              >
                About
              </a>
            </li>
            <li>
              <a
                style={{ color: theme === "light" ? "#000" : "#fff" }}
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                style={{ color: theme === "light" ? "#000" : "#fff" }}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            id="dark-mode-button"
            className="nav__dark-mode-button"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <TbMoonStars size="25px" color="#000" />
            ) : (
              <TbSunHigh size="25px" color="#fff" />
            )}
          </button>
        </div>
      </motion.nav>
    </>
  );
};

export default Nav;
