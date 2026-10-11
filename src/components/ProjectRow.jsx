import EntryLogo from './EntryLogo.jsx'
import './ProjectRow.css'

export default function ProjectRow({ project, open, onToggle }) {
  return (
    <div className="project-row" data-open={open}>
      <button
        className="project-row__trigger"
        onClick={onToggle}
        aria-expanded={open}
      >
        <div className="project-row__head">
          <div className="project-row__lead">
            <EntryLogo src={project.logo} alt={`${project.title} logo`} />
            <h3 className="project-row__title">{project.title}</h3>
          </div>
          <span className="project-row__end">
            <span className="project-row__period mono">{project.period}</span>
            <span className="project-row__sign mono" aria-hidden="true">
              {open ? '−' : '+'}
            </span>
          </span>
        </div>
        <p className="project-row__meta mono">{project.org}</p>
      </button>

      <div className="project-row__detail" data-open={open}>
        <div className="project-row__detail__inner">
          <p className="project-row__summary">{project.summary}</p>
          <p className="project-row__description">{project.detail}</p>
          <ul className="project-row__stack">
            {project.stack.map((s) => (
              <li key={s} className="mono">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
