import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaFileDownload } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container text-center">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-text">Let’s get in touch!</p>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xrblkadw"
          method="POST"
          className="contact-form mt-4"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />
          <button class="btn btn-primary mt-3 fw-bold" type="submit">Send Message</button>
        </form>

        {/* Links */}
        <div className="contact-links d-flex flex-column align-items-center gap-3 mt-5">
          <a
            href="mailto:hafsatarek4@gmail.com"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="icon" /> Email: hafsatarek4@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/hafsa-hikal-87a591318/"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" /> LinkedIn: Hafsa Hikal
          </a>
          <a
            href="https://drive.google.com/file/d/11_RIf83xnXr0ibKBr3B6SGFytHZKF5R9/view?usp=drive_link"
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
