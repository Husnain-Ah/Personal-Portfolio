import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { projects } from "./projectData"
import ProjectPage from "./ProjectPage"

function Home() {
  return (
    <div className="home-page">
      <header className="site-header" role="banner" aria-label="Site header">
        <div className="site-title">
          <span className="logo" aria-hidden="true"></span>
          <div>
            <h1>Personal Portfolio</h1>
            <p className="lead">Explore future projects and click through to each concept page.</p>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <p className="hero-text">
          I’m planning new projects that show my design direction, technical vision, and what’s coming next.
          Tap a card below to see more details.
        </p>
      </section>

      <section className="about-section" aria-labelledby="about-title">
        <div className="section-header">
          <h2 id="about-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-photo">
            <img
              src="/about-photo.jpg"
              alt="Husnain Ahmed graduation photo"
              onError={(event) => {
                event.currentTarget.style.display = "none"
              }}
            />
          </div>

          <div className="about-copy">
            <p>
              I’m Husnain Ahmed, 22, from Rochdale. I recently graduated with a First Class Honours degree in Software Engineering from Manchester Metropolitan University and I’m currently looking for a full-time role in the tech industry.
            </p>
            <p>
              I have 2+ years of professional experience in full-stack development and enterprise systems. My background includes working part time as a Software Developer at CarSpect while also gaining experience in retail, and previously completing a placement role as a Junior Developer at TopCashBack.
            </p>
            <p>
              I have strong experience with Agile delivery, CI/CD automation, dependency injection, and improving system maintainability. I also enjoy using AI-assisted tools to accelerate development and testing workflows.
            </p>
            <p>
              Outside of work, I enjoy hiking, martial arts, baking, and playing guitar.
            </p>
          </div>
        </div>
      </section>

      <section className="future-projects" aria-labelledby="future-projects-title">
        <div className="section-header">
          <h2 id="future-projects-title">Future Projects</h2>
          <p>Click through each card to view the project concept and timeline.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="project-card">
              <div className="project-card-top">
                <span className="project-status">{project.status}</span>
                <h3>{project.title}</h3>
              </div>
              <p>{project.teaser}</p>
              <p className="project-meta">
                <strong>Tools:</strong> {project.tools}
              </p>
              <p className="project-meta">
                <strong>Target:</strong> {project.timeline}
              </p>
              <span className="project-link">View project →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <main className="app-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectPage projects={projects} />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
