
import './App.css'

function App() {
  // These links will connect visitors to the main sections of our portfolio.
  return (
    <div className="portfolio">
      {/* Navigation bar */}
      <header className="navbar">
        <a className="logo" href="#home">
          Bharat<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about-me">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Main introduction section */}
      <main>
        <section className="hero-section" id="home">
          <p className="eyebrow">
            JAVA DEVELOPER · 2026 GRADUATE
          </p>

          <h1>
            Hi, I'm <span>Bharat Singh Panwar.</span>
          </h1>

          <a
            className="button secondary-button"
            href="/Bharat%20Singh%20Panwar%209783815994_Resume.pdf"
            download="Bharat_Singh_Panwar_Resume.pdf"
          >
            Download Resume ↓
          </a>

          <h2>I build reliable software.</h2>

          <p className="hero-description">
            Computer Science graduate focused on Java development,
            backend systems, and building useful applications.
          </p>

          <div className="hero-actions">
            <a className="button primary-button" href="#projects">
              Explore Projects ↗
            </a>

            <a className="button secondary-button" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="tech-card" id="about">
            <p className="card-label">MY DEVELOPER TOOLKIT</p>
            <p className="tech-list">
               Java · HTML · CSS · JavaScript · React · Firebase
            </p>

            <p className="card-label">CURRENTLY LEARNING</p>

           <p className="tech-list">
              Spring Boot · SQL · REST APIs
           </p>
            <p className="card-label">FEATURED WORK</p>
            <p className="project-names">
              Gita AI Guide · GM Task Management Dashboard
            </p>
          </div>
        </section>

        
{/* Featured projects with real descriptions and technology tags. */}
<section className="projects-section" id="projects">
  <p className="eyebrow">SELECTED WORK</p>
  <h2 className="section-title">Projects I've worked on</h2>
  <p className="section-description">
    Practical applications built to solve real problems and
    strengthen my software development skills.
  </p>

<div className="projects-grid">
  {/* Project 1: AI-powered guidance platform */}
  <article className="project-card">
    <p className="project-number">PROJECT 01</p>
    <h3>Gita AI Guide</h3>

    <p>
      An AI-powered youth guidance platform offering career
      guidance, mental wellness support, ethical advice, and
      conflict-resolution guidance inspired by the Bhagavad Gita.
    </p>

    <div className="tech-tags">
      <span>React</span>
      <span>Python Flask</span>
      <span>JSON</span>
    </div>

    <p className="project-role">
      My contribution: Developed the project with AI-assisted
      development tools as part of my final-year team project.
    </p>

    <div className="project-links">
      <a
        className="button primary-button"
        href="https://gita-ai-guide.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        Live Demo ↗
      </a>

      <span className="project-status">
        Ongoing · Improvements planned
      </span>
    </div>
  </article>

  {/* Project 2: Railway task-management dashboard */}
  <article className="project-card">
    <p className="project-number">PROJECT 02</p>
    <h3>GM Task Management Dashboard</h3>

    <p>
      A web-based task-management dashboard developed during
      my North Western Railways internship to support task
      tracking and management.
    </p>

    <div className="tech-tags">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
      <span>Firebase</span>
    </div>

    <p className="project-role">
      Experience: Software Engineering Intern, North Western Railways.
    </p>

    <div className="project-links">
      <a
        className="button primary-button"
        href="https://bharat-singh97.github.io/Gm-task-Management-dashboard/"
        target="_blank"
        rel="noreferrer"
      >
        Live Demo ↗
      </a>

      <a
        className="button secondary-button"
        href="https://github.com/Bharat-Singh97/Gm-task-Management-dashboard"
        target="_blank"
        rel="noreferrer"
      >
        Source Code ↗
      </a>
    </div>

    <p className="project-status">
      Deployed · Internship Project
    </p>
  </article>
</div>
</section>
           
        {/* About section: introduce my background and career goals. */}
        <section className="about-section" id="about-me">
          <p className="eyebrow">ABOUT ME</p>

          <h2 className="section-title">
            Building my future in software development.
          </h2>

          <p className="about-description">
            I'm a Computer Science and Engineering graduate from
            Government Engineering College, Bikaner. I'm focused on
            Java development and building practical software
            applications. I'm currently strengthening my backend
            development skills through Java training at VibrantMinds,
            including Spring Boot and SQL.
          </p>

          <p className="about-description">
            My goal is to become a Java Backend Developer and contribute
            to software projects that solve real-world problems.
          </p>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>2026</h3>
              <p>B.Tech CSE Graduate</p>
            </div>

            <div className="highlight-card">
              <h3>Java</h3>
              <p>Primary learning focus</p>
            </div>

            <div className="highlight-card">
              <h3>Backend</h3>
              <p>Career direction</p>
            </div>
          </div>
        </section>

        {/* Skills section: group technologies by category. */}
        <section className="skills-section" id="skills">
          <p className="eyebrow">MY SKILLS</p>

          <h2 className="section-title">
            Technologies I work with
          </h2>

          <p className="section-description">
            My current toolkit and the technologies I'm learning
            to become a stronger Java Backend Developer.
          </p>

          <div className="skills-grid">
            <article className="skill-card">
              <h3>Programming</h3>
              <div className="tech-tags">
                <span>Java</span>
                <span>Python</span>
                <span>C</span>
                <span>C++</span>
                <span>JavaScript</span>
              </div>
            </article>

            <article className="skill-card">
              <h3>Frontend</h3>
              <div className="tech-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>React</span>
                <span>DOM Manipulation</span>
              </div>
            </article>

            <article className="skill-card">
              <h3>Backend & Database</h3>
              <div className="tech-tags">
                <span>Firebase</span>
                <span>Spring Boot — Learning</span>
                <span>SQL — Learning</span>
                <span>REST APIs — Learning</span>
              </div>
            </article>

            <article className="skill-card">
              <h3>Tools & Concepts</h3>
              <div className="tech-tags">
                <span>Git</span>
                <span>GitHub</span>
                <span>Postman</span>
                <span>OOP</span>
                <span>DSA</span>
              </div>
            </article>
          </div>
        </section>

                {/* Contact section with verified profile links. */}
        <section className="contact-section" id="contact">
          <p className="eyebrow">GET IN TOUCH</p>

          <h2 className="section-title">
            Let's connect.
          </h2>

          <p className="contact-description">
            I'm interested in Java Developer and Backend Developer
            opportunities. Feel free to contact me or explore my work.
          </p>

          <div className="contact-grid">
            <a
              className="contact-card"
              href="mailto:bharatsingh12062001@gmail.com"
            >
              <span className="contact-label">EMAIL ME</span>
              <span className="contact-value">
                bharatsingh12062001@gmail.com
              </span>
              <span className="contact-action">Send an email ↗</span>
            </a>

            <a
              className="contact-card"
              href="https://github.com/Bharat-Singh97"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-label">GITHUB</span>
              <span className="contact-value">Bharat-Singh97</span>
              <span className="contact-action">Explore my code ↗</span>
            </a>

            <a
              className="contact-card"
              href="https://www.linkedin.com/in/bharatsingh97"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-label">LINKEDIN</span>
              <span className="contact-value">Connect professionally</span>
              <span className="contact-action">View my profile ↗</span>
            </a>
          </div>
        </section>
      </main>

      
<footer className="footer">
  <p>
    Built with React · Bharat Singh Panwar
  </p>

  <p>
    Coding Profile:{" "}
    <a
      href="https://leetcode.com/u/bharatsinghpanwar/"
      target="_blank"
      rel="noopener noreferrer"
    >
      LeetCode
    </a>
  </p>
</footer>
    </div>
  )
}

export default App
