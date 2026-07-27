import { proyectos } from '../../../shared/constants/data.js'

export default function Projects() {
  return (
    <section id="proyectos">
      <div className="wrap">
        <div className="eyebrow"><span className="dot teal" /> service/projects · {proyectos.length}</div>
        <h2>Proyectos</h2>

        <div style={{ display: 'grid', gap: 20 }}>
          {proyectos.map((p, i) => (
            <div key={i} className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 20 }}>
              <div style={{ background: 'var(--surface-2)', borderRadius: 'var(--radius)', overflow: 'hidden', minHeight: 160 }}>
                {p.capturas?.[0] && (
                  <img
                    src={p.capturas[0]}
                    alt={p.titulo}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={(e) => { e.currentTarget.style.opacity = 0.15 }}
                  />
                )}
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 12 }}>
                  <h3 style={{ fontSize: 18 }}>{p.titulo}</h3>
                  <a href={p.repositorio} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ whiteSpace: 'nowrap' }}>
                    repo →
                  </a>
                </div>
                <p style={{ marginTop: 10 }}>{p.descripcion}</p>
                <p style={{ fontSize: 13 }}>
                  <span style={{ color: 'var(--text)' }}>Aprendizajes: </span>
                  {p.habilidadesAprendidas}
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
                  {p.tecnologias.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
