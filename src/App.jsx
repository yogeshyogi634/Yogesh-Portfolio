import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Project from "./components/project/Project";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div>
      <Cursor />
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Skills />
      </section>
      <section id="Project">
        <Parallax type="project" />
      </section>
      <Project />
      <section id="Contact">
        <Contact />
      </section>
      {/* <Test /> */}
    </div>
  );
}

export default App;
