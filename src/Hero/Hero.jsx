import "./Hero.css";

const Hero = (_) => {
  return (
    <section className="hero-section d-flex align-items-center" id="hero">
      <div className="container">
        <div className="row align-items-center">
          {/* Title/header Col */}
          <div className="col-md-6">
            <h1 className="hero-title">
              Hi, I’m <span className="highlighted">Hafsa</span>
              <br />
              Front-End Developer
            </h1>
            <p className="hero-subtitle">
              I love crafting beautiful and functional websites with React,
              HTML, CSS & UI/UX magic.
            </p>

            <a href="#projects" className="btn btn-primary mt-3 fw-bold">
              View My Work
            </a>
          </div>

          {/* Image Col */}
          <div className="col-md-6 text-center mt-4">
            <img
              src={`${process.env.PUBLIC_URL}/Images/Hafsa.jpg`}
              alt="Hafsa Illustration"
              className="img-fluid hero-img w-65 w-md-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
