import { NavLink } from 'react-router-dom'
import { hero } from '../constants/data.js'

const links = [
  { to: '/sobre-mi', label: 'Sobre mí' },
  { to: '/habilidades', label: 'Habilidades' },
  { to: '/educacion-experiencia', label: 'Educación y experiencia' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  return (
    <nav className="topbar">
      <div className="wrap">
        <NavLink to="/" className="brand" style={{ textDecoration: 'none' }}>
          ~/{hero.nombre.split(' ')[0].toLowerCase() || 'portafolio'}
        </NavLink>
        <ul>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                style={({ isActive }) => ({ color: isActive ? 'var(--amber)' : undefined })}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
