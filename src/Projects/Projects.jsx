import "./Projects.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Coffee Shop",
      description:
        "A simple and elegant coffee shop website built using HTML and CSS.",
      image: `${process.env.PUBLIC_URL}/Images/coffee shop.png`,
      liveLink: "https://hafsatarek.github.io/Coffee-Shop/",
      codeLink: "https://github.com/HafsaTarek/Coffee-Shop",
    },
    {
      title: "Pet Shop",
      description: "Responsive pet store website built with HTML5 and CSS3.",
      image: `${process.env.PUBLIC_URL}/Images/pet store.png`,
      liveLink: "https://hafsatarek.github.io/Pet-Shop/",
      codeLink: "https://github.com/HafsaTarek/Pet-Shop",
    },
    {
      title: "Resort Website",
      description:
        "A multi-section resort landing page using HTML5, CSS3 and Bootstrap.",
      image: `${process.env.PUBLIC_URL}/Images/resort.png`,
      liveLink: "https://hafsatarek.github.io/Resort-website/",
      codeLink: "https://github.com/HafsaTarek/Resort-website",
    },
    {
      title: "Purely Modest Store",
      description:
        "A modest fashion online store styled with HTML5, CSS3 and JS.",
      image: `${process.env.PUBLIC_URL}/Images/PurelyModest.png`,
      liveLink: "https://hafsatarek.github.io/Purely-Modest/",
      codeLink: "https://github.com/HafsaTarek/Purely-Modest",
    },
    {
      title: "Mental Health Website",
      description:
        "A responsive mental health awareness site using HTML5, CSS3, and Bootstrap.",
      image: `${process.env.PUBLIC_URL}/Images/Mental health.png`,
      liveLink: "https://hafsatarek.github.io/Mental-health-Website/",
      codeLink: "https://github.com/HafsaTarek/Mental-health-Website",
    },
    {
      title: "GlamGourmet - Food Delivery App",
      description:
        "A React-based modern food delivery platform with routing and cart features.",
      image: `${process.env.PUBLIC_URL}/Images/glamgourmet.png`,
      liveLink: "https://hafsatarek.github.io/GlamGourmet/",
      codeLink: "https://github.com/HafsaTarek/GlamGourmet",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container text-center">
        <h2 className="section-title">Projects</h2>
        <div className="row justify-content-center mt-4">
          {projects.map((project, index) => (
            <div className="col-md-5 project-card m-2 mb-4" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="img-fluid project-img mb-3"
              />
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
              <div className="project-links d-flex justify-content-center gap-3 mt-2">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> Live
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
