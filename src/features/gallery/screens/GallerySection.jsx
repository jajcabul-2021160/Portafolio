import { galeria } from '../../../shared/constants/data.js'

export default function Gallery() {
  return (
    <section id="galeria">
      <div className="wrap">
        <div className="eyebrow"><span className="dot" /> service/gallery</div>
        <h2>Vista previa rápida de proyectos</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {galeria.map((g, i) => (
            <div key={i} className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ aspectRatio: '16/10', background: 'var(--surface-2)', overflow: 'hidden' }}>
                <img
                  src={g.imagen}
                  alt={g.nombre}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={(e) => { e.currentTarget.style.opacity = 0.15 }}
                />
              </div>
              <div style={{ padding: '10px 14px', fontFamily: 'var(--mono)', fontSize: 13 }}>{g.nombre}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
