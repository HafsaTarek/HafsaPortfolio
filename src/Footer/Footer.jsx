import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer text-center py-4">
      <div className="container">
        <div className="footer-icons d-flex justify-content-center gap-4 mb-3">
          <a
            href="https://github.com/HafsaTarek"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub"
          >
            <FaGithub className="footer-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/hafsa-hikal-87a591318/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="footer-icon" />
          </a>
        </div>
        <p className="footer-text mb-0">
          Made with <span className="heart">❤</span> by <strong>Hafsa Tarek</strong> &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
