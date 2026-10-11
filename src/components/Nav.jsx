import { Link, NavLink } from 'react-router-dom'
import { profile } from '../data.js'
import ThemeToggle from './ThemeToggle.jsx'
import Clock from './Clock.jsx'
import './Nav.css'

const pages = [
  { to: '/', label: 'Home', end: true, key: 'h' },
  { to: '/projects', label: 'Projects', key: 'p' },
  { to: '/cv', label: 'CV', key: 'c' },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__top">
        <Clock />
        <ThemeToggle />
      </div>

      <div className="container nav__row">
        <Link className="nav__brand" to="/" aria-label="Go to homepage">
          <span className="nav__brand-name">{profile.name}</span>
          <span className="nav__brand-role">{profile.role} / {profile.focus}</span>
        </Link>

        <nav className="nav__pages" aria-label="Main navigation">
          {pages.map((p) => (
            <NavLink
              key={p.to}
              to={p.to}
              end={p.end}
              className={({ isActive }) =>
                'nav__link bracket' + (isActive ? ' nav__link--active' : '')
              }
            >
              {p.label}
              <span className="key-hint">{p.key}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
