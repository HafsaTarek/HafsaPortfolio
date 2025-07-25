import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaPaintBrush,
} from "react-icons/fa";
import { SiFigma } from "react-icons/si";

const brandColor = "#ff69b4"; 

const skills = [
  { name: "HTML5", icon: FaHtml5, color: brandColor },
  { name: "CSS3", icon: FaCss3Alt, color: brandColor },
  { name: "JavaScript", icon: FaJsSquare, color: brandColor },
  { name: "React.js", icon: FaReact, color: brandColor },
  { name: "Bootstrap", icon: FaBootstrap, color: brandColor },
  { name: "Git & GitHub", icon: FaGithub, color: brandColor },
  { name: "UI/UX Design", icon: FaPaintBrush, color: brandColor },
  { name: "Figma", icon: SiFigma, color: brandColor },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">My Skills</h2>
        <div className="row">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="col-6 col-md-3 mb-4 skill-box"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="skill-card text-center p-3 rounded shadow-sm">
                  <Icon size={48} color={skill.color} />
                  <p className="mt-2">{skill.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
