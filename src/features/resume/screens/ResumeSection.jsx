import { educacion, experiencia } from '../../../shared/constants/data.js'

function Bloque({ titulo, items, renderItem }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text-dim)', marginBottom: 14 }}>
        {titulo}
      </div>
      <div style={{ display: 'grid', gap: 14 }}>
        {items.map((it, idx) => (
          <div key={idx} className="card">{renderItem(it)}</div>
        ))}
      </div>
    </div>
  )
}

export default function Resume() {
  return (
    <section id="educacion-experiencia">
      <div className="wrap">
        <div className="eyebrow"><span className="dot teal" /> service/resume</div>
        <h2>Educación y experiencia</h2>

        <div style={{ display: 'grid', gap: 32 }}>
          <Bloque
            titulo="$ log --educacion"
            items={educacion}
            renderItem={(e) => (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                  <strong>{e.institucion}</strong>
                  <span className="tag">{e.periodo}</span>
                </div>
                <div style={{ color: 'var(--teal)', fontSize: 14, margin: '6px 0' }}>{e.titulo}</div>
                <p style={{ margin: 0 }}>{e.descripcion}</p>
              </>
            )}
          />

          <Bloque
            titulo="$ log --experiencia"
            items={experiencia}
            renderItem={(e) => (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                  <strong>{e.empresa}</strong>
                  <span className="tag">{e.periodo}</span>
                </div>
                <div style={{ color: 'var(--teal)', fontSize: 14, margin: '6px 0' }}>{e.puesto}</div>
                <p style={{ margin: 0 }}>{e.descripcion}</p>
              </>
            )}
          />
        </div>
      </div>
    </section>
  )
}
