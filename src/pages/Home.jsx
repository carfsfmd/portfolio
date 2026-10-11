import { Link } from 'react-router-dom'
import EntryLogo from '../components/EntryLogo.jsx'
import { profile, qa, quote, currently, projects } from '../data.js'
import './Home.css'

export default function Home() {
  const featured = projects.slice(0, 4)

  return (
    <>
      <section className="home-hero">
        <p className="home-hero__eyebrow">{profile.role} / {profile.focus}</p>
        <div className="home-hero__grid">
          <div>
            <h1 className="home-hero__title">{profile.name}</h1>
            <p className="home-hero__intro">
              I design dependable software for healthcare and other demanding
              environments, where clarity and reliability directly affect people.
            </p>
            <div className="home-hero__actions">
              <Link className="home-hero__action home-hero__action--primary" to="/projects">
                Explore projects
              </Link>
              <Link className="home-hero__action" to="/cv">
                View experience
              </Link>
            </div>
          </div>

          <aside className="home-hero__panel" aria-label="Professional highlights">
            <dl>
              <div>
                <dt>Based in</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Specialism</dt>
                <dd>{profile.focus}</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>FEUP / 2027</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="home-qa" aria-label="Professional profile">
        {qa.map((item) => (
          <article className="home-qa__item" key={item.label}>
            <h2 className="section-heading">{item.label}</h2>
            <p className="home-section__body">{item.body}</p>
          </article>
        ))}
      </section>

      <section className="home-quote">
        <p className="home-quote__line">{quote.line}</p>
        <p className="home-quote__body">{quote.body}</p>
      </section>

      <section className="home-section">
        <h2 className="section-heading">Currently</h2>
        <ul className="home-currently">
          {currently.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="home-section">
        <h2 className="section-heading">Selected work</h2>
        <ul className="home-featured">
          {featured.map((p) => (
            <li key={p.id}>
              <Link className="home-featured__link" to="/projects">
                <EntryLogo src={p.logo} alt={`${p.title} logo`} />
                <span className="home-featured__title">{p.title}</span>
                <span className="home-featured__summary">{p.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
