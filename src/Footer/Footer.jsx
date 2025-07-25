import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container">
        <p className="footer-text">
          Made with ❤️ by Hafsa Tarek &copy; {new Date().getFullYear()}
        </p>
        <div className="footer-icons mt-2">
          <a
            href="https://github.com/HafsaTarek"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hafsa-hikal-87a591318/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
