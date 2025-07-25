import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaFileDownload } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container text-center">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-text">Let’s get in touch!</p>
        <div className="contact-links d-flex flex-column align-items-center gap-3 mt-4">
          {/* Email */}
          <a
            href="mailto:hafsatarek4@gmail.com"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="icon" /> Email: hafsatarek4@gmail.com
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hafsa-hikal-87a591318/"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" /> LinkedIn: Hafsa Hikal
          </a>

          {/* CV */}
          <a
            href="https://drive.google.com/file/d/1cSxQGtXhXnAeaQk6D8WscZhCxFckGw9P/view?usp=drive_link"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFileDownload className="icon" /> View My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
