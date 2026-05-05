import React from "react"
import { Link, useParams, Navigate } from "react-router-dom"

export default function ProjectPage({ projects }) {
  const { projectId } = useParams()
  const project = projects.find((item) => item.id === projectId)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <article className="project-page">
      <div className="project-back">
        <Link to="/" className="back-button">
          ← Back to home
        </Link>
      </div>

      <div className="project-detail">
        <section className="project-overview">
          <span className="project-status">{project.status}</span>
          <h2>{project.title}</h2>
          <p>{project.description}</p>

          <div className="project-meta-block">
            <span className="meta-pill">Tools: {project.tools}</span>
            <span className="meta-pill">Target: {project.timeline}</span>
          </div>
        </section>

        <section className="project-features">
          <h3>Features</h3>
          <ul className="feature-list">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="project-details">
          <h3>Goal</h3>
          <p>{project.goals}</p>

          <h3>More details</h3>
          <p>{project.details}</p>
        </section>
      </div>
    </article>
  )
}
