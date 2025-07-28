import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Header.css";

const navItems = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Get in Touch", to: "contact" },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState("hero");

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-pink">
      <div className="container">
        <ScrollLink
          className="navbar-brand fw-bold"
          to="hero"
          smooth={true}
          duration={200}
          offset={-70}
          onClick={() => handleSetActive("hero")}
        >
          Hafsa Hikal
        </ScrollLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3">
            {navItems.map((item) => (
              <li className="nav-item" key={item.to}>
                <ScrollLink
                  className={`nav-link ${
                    activeLink === item.to ? "active" : ""
                  }`}
                  to={item.to}
                  smooth={true}
                  duration={200}
                  offset={-70}
                  onClick={() => handleSetActive(item.to)}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
