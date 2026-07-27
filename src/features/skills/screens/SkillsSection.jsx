import { habilidades } from '../../../shared/constants/data.js'

export default function Skills() {
  const categorias = [...new Set(habilidades.map((h) => h.categoria))]

  return (
    <section id="habilidades">
      <div className="wrap">
        <div className="eyebrow"><span className="dot" /> service/skills · {habilidades.length} activos</div>
        <h2>Habilidades</h2>

        {categorias.map((cat) => (
          <div key={cat} style={{ marginBottom: 28 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text-dim)', marginBottom: 12 }}>
              {cat}
            </div>
            <div style={{ display: 'grid', gap: 10 }}>
              {habilidades.filter((h) => h.categoria === cat).map((h) => (
                <div key={h.nombre} className="card" style={{ padding: '12px 16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontFamily: 'var(--mono)', fontSize: 13 }}>
                    <span>{h.nombre}</span>
                    <span style={{ color: 'var(--amber)' }}>{h.nivel}%</span>
                  </div>
                  <div style={{ height: 5, background: 'var(--line)', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${h.nivel}%`, background: 'var(--teal)' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
