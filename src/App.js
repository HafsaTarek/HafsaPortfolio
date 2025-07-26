import React, { useEffect, useState } from "react";

import "./App.css";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import About from "./About me/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Automatically set theme based on system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
