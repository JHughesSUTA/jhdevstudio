import { useState, useEffect, useRef } from "react";
import "./Nav.scss";
import Logo from "./SVGs/Logo";
import { TbMoonStars, TbSunHigh } from "react-icons/tb";
import { motion } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";
import { Divide as Hamburger } from "hamburger-react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const firstMenuLinkRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);

      // move focus to first nav link after menu open animation
      setTimeout(() => {
        firstMenuLinkRef.current?.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const navLinkStyle = {
    color: theme === "light" ? "#000" : "#fff",
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.nav
        id="nav"
        className="nav nav--desktop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        style={{ backgroundColor: theme === "light" ? "#fff" : "#23272f" }}
      >
        <div className="container">
          <div style={{ maxWidth: "64px" }}>
            <Logo />
          </div>
          <ul className="nav__links--desktop">
            <li>
              <a style={navLinkStyle} href="#hero">
                About
              </a>
            </li>
            <li>
              <a style={navLinkStyle} href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a style={navLinkStyle} href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <motion.div
            id="mobile-menu"
            ref={mobileMenuRef}
            className={isMenuOpen ? "mobile-menu--open" : "mobile-menu--closed"}
            initial={{ x: -260 }}
            animate={{ x: isMenuOpen ? 0 : -260 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            inert={!isMenuOpen}
          >
            <ul className="nav__links--mobile">
              <li>
                <a
                  ref={firstMenuLinkRef}
                  href="#hero"
                  onClick={toggleMenu}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={toggleMenu}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={toggleMenu}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
          <div className="nav__right">
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
            <div ref={hamburgerRef}>
              <Hamburger
                color={navLinkStyle.color}
                toggled={isMenuOpen}
                toggle={setIsMenuOpen}
              />
            </div>
          </div>
        </div>
      </motion.nav>
    </>

    // <nav>

    // </nav>
  );
};

export default Nav;
