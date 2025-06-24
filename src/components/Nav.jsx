import logo from "../assets/images/logo-black.png";
import { MdDarkMode } from "react-icons/md";
import "./Nav.scss";

const Nav = () => {
  return (
    <>
      <nav id="nav" className="container nav">
        <img src={logo} alt="" width="64px" height="64px" />
        <ul class="nav__links">
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
        <MdDarkMode size="40px" />
      </nav>
    </>
  );
};

export default Nav;
