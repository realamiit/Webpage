import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Terminal,
  Code2,
  Cpu,
  Layers3,
  Sparkles,
  Command,
  ChevronDown,
} from "lucide-react";
import "./index.css";

const projects = [
  {
    number: "01",
    title: "DSA JAVA",
    type: "LEARNING SYSTEM",
    description:
      "A structured Java journey focused on algorithms, problem solving and data structures.",
    tech: ["Java", "DSA", "Git"],
    link: "https://github.com/realamiit/DSA-java",
  },
  {
    number: "02",
    title: "AMAZON WEBPAGE",
    type: "FRONTEND PROJECT",
    description:
      "A responsive e-commerce interface recreated with modern frontend fundamentals.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/realamiit/Amazon-webpage",
  },
  {
    number: "03",
    title: "DSA TRACKER",
    type: "FULL STACK",
    description:
      "A MERN based system designed to organize coding questions and revision progress.",
    tech: ["React", "Node", "MongoDB"],
    link: "https://github.com/realamiit/mern-learning",
  },
];

const skills = [
  "Java",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "HTML5",
  "CSS3",
  "Git",
  "REST APIs",
  "DSA",
];

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="lab">

      {/* NAV */}
      <nav className="nav">
        <div className="brand">
          <span className="brand-dot" />
          AG<span>/LAB</span>
        </div>

        <div className="nav-links">
          <button onClick={() => scrollTo("work")}>WORK</button>
          <button onClick={() => scrollTo("stack")}>STACK</button>
          <button onClick={() => scrollTo("about")}>ABOUT</button>
        </div>

        <div className="nav-status">
          <span />
          AVAILABLE FOR WORK
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">

        <div className="hero-grid" />

        <div className="hero-top">
          <div className="eyebrow">
            <Terminal size={14} />
            DIGITAL ENGINEERING LAB / 2026
          </div>

          <div className="clock">
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </div>
        </div>

        <div className="hero-content">

          <p className="hero-index">01 — INTRODUCTION</p>

          <h1>
            AMIT
            <br />
            <span>GUPTA</span>
          </h1>

          <div className="hero-bottom">

            <div className="hero-role">
              SOFTWARE ENGINEER
              <br />
              <span>IN THE MAKING.</span>
            </div>

            <div className="hero-description">
              I build digital experiences, experiment with systems,
              and turn ideas into working products.
            </div>

            <button
              className="enter-button"
              onClick={() => scrollTo("work")}
            >
              <span>ENTER THE LAB</span>
              <ArrowUpRight size={20} />
            </button>

          </div>
        </div>

        <div className="scroll-indicator">
          <ChevronDown size={18} />
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto">

        <div className="section-label">
          <span>02</span>
          MANIFESTO
        </div>

        <div className="manifesto-content">
          <p>
            I DON'T JUST WRITE CODE.
          </p>

          <h2>
            I BUILD.
            <br />
            <em>BREAK.</em>
            <br />
            UNDERSTAND.
            <br />
            BUILD BETTER.
          </h2>
        </div>

        <div className="manifesto-side">
          <Sparkles size={20} />
          <p>
            Every project is an experiment.
            Every bug is information.
            Every iteration gets closer to better software.
          </p>
        </div>

      </section>

      {/* WORK */}
      <section className="work" id="work">

        <div className="section-header">
          <div>
            <span className="section-number">03</span>
            <span className="section-name">SELECTED WORK</span>
          </div>

          <span className="section-count">03 PROJECTS</span>
        </div>

        <div className="project-list">

          {projects.map((project) => (
            <article className="project" key={project.number}>

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-main">

                <div className="project-type">
                  {project.type}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-arrow"
              >
                <ArrowUpRight size={28} />
              </a>

            </article>
          ))}

        </div>
      </section>

      {/* STACK */}
      <section className="stack" id="stack">

        <div className="section-label">
          <span>04</span>
          TECHNOLOGY STACK
        </div>

        <div className="stack-layout">

          <div className="stack-title">
            <Code2 size={30} />
            <h2>
              TOOLS
              <br />
              I <em>THINK</em> WITH.
            </h2>
          </div>

          <div className="skills-grid">

            {skills.map((skill, index) => (
              <div className="skill" key={skill}>
                <span>0{index + 1}</span>
                <strong>{skill}</strong>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SYSTEM */}
      <section className="system">

        <div className="system-card">
          <div className="system-icon">
            <Cpu size={30} />
          </div>

          <div>
            <span>SYSTEM STATUS</span>
            <h3>BUILDING IN PUBLIC</h3>
          </div>

          <div className="system-live">
            <span />
            ONLINE
          </div>
        </div>

        <div className="system-card">
          <div className="system-icon">
            <Layers3 size={30} />
          </div>

          <div>
            <span>CURRENT FOCUS</span>
            <h3>JAVA + DSA + FULL STACK</h3>
          </div>

          <div className="system-value">
            2026
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section className="about" id="about">

        <div className="section-label">
          <span>05</span>
          ABOUT
        </div>

        <div className="about-grid">

          <h2>
            CURIOUS
            <br />
            BY DEFAULT.
          </h2>

          <div className="about-text">
            <p>
              I'm Amit Gupta, a developer focused on becoming
              a stronger software engineer one system at a time.
            </p>

            <p>
              Currently exploring Java, DSA, React, backend
              development and everything that makes software
              actually work.
            </p>

            <div className="socials">
              <a
                href="https://github.com/realamiit"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
                GITHUB
              </a>

              <a href="#">
                <Linkedin size={18} />
                LINKEDIN
              </a>

              <a href="mailto:hello@amit.dev">
                <Mail size={18} />
                CONTACT
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer>

        <div className="footer-brand">
          AG<span>/LAB</span>
        </div>

        <div className="footer-center">
          <Command size={15} />
          <span>DESIGNED & BUILT WITH CODE</span>
        </div>

        <div>
          © {new Date().getFullYear()} AMIT GUPTA
        </div>

      </footer>

    </main>
  );
}

export default App;