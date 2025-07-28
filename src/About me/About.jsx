import "./About.css";

const About = (_) => {
  return (
    <section className="about-section py-5" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 text-center  mb-4 mb-md-0">
            <img
              src={`${process.env.PUBLIC_URL}/Images/Hafsa.jpg`}
              alt="Hafsa"
              className="img-fluid rounded-4 about-img w-75 w-md-100 mb-2"
            />
          </div>

          <div className="col-md-7">
            <h2 className="mb-3">About Me</h2>
            <p className="about-text">
              I'm <strong>Hafsa</strong>, a passionate{" "}
              <strong>Front-End Developer</strong> with a strong love for
              crafting responsive, user-friendly websites using{" "}
              <strong>React</strong>, <strong>HTML</strong>,{" "}
              <strong>CSS</strong>, and a keen eye for{" "}
              <strong>UI/UX design</strong>.
            </p>
            <p className="about-text">
              I enjoy turning ideas into real-world web experiences, always
              learning and staying updated with modern technologies. When I'm
              not coding, you'll find me exploring creative design ideas or
              enhancing user experience strategies.
            </p>
            <a href="#projects" className="btn btn-primary mt-3 fw-bold">
              See My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
