import React, { useEffect, useState, forwardRef } from "react";
import { useInView } from "react-intersection-observer"; //we use this hook to detect when a section is visible to know when to start the animation
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaBootstrap, FaPaintBrush,
} from "react-icons/fa";
import "./Skills.css";

const skills = [
  { name: "HTML", level: 90, icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS", level: 85, icon: <FaCss3Alt color="#264de4" /> },
  { name: "JavaScript", level: 80, icon: <FaJs color="#f0db4f" /> },
  { name: "React", level: 75, icon: <FaReact color="#61dbfb" /> },
  { name: "Figma", level: 70, icon: <FaFigma color="#a259ff" /> },
  { name: "Bootstrap", level: 75, icon: <FaBootstrap color="#563d7c" /> },
  { name: "UI/UX", level: 80, icon: <FaPaintBrush color="#d63384" /> },
];

const Skills = forwardRef((props, ref) => {
  const { ref: inViewRef, inView } = useInView({ threshold: 0.3 });
  const [animate, setAnimate] = useState(false);

  const setRefs = (node) => {
    inViewRef(node);
    if (ref) ref.current = node;
  };

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [inView]);

  return (
    <div id="skills" className="skills-container" ref={setRefs}>
      <h2>My Skills</h2>
      {skills.map((skill, index) => (
        <div className="skill" key={index}>
          <div className="skill-label">
            <div className="skill-icon">
              <span className="icon">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
            <span>{skill.level}%</span>
          </div>
          <div className="progress-bar">
            <div
              className={`progress-fill ${animate ? "animate" : ""}`}
              style={{ width: animate ? `${skill.level}%` : "0%" }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
});

export default Skills;
