import { Link, Link as ScrollLink } from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-pink">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Hafsa Hikal
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          {/* toggler buton needs some fix */}
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                to="hero"
                smooth={true}
                duration={200}
                offset={-70}
              >
                Home
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                to="about"
                smooth={true}
                duration={200}
                offset={-70}
              >
                About
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                to="skills"
                smooth={true}
                duration={200}
                offset={-70}
              >
                Skills
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                to="projects"
                smooth={true}
                duration={200}
                offset={-70}
              >
                Projects
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                to="contact"
                smooth={true}
                duration={200}
                offset={-70}
              >
                Get in Touch
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
