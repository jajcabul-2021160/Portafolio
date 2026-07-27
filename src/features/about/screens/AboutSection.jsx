import { resumen, datosGenerales } from '../../../shared/constants/data.js'

export default function About() {
  const rows = [
    ['edad', datosGenerales.edad],
    ['ubicación', datosGenerales.ubicacion],
    ['email', datosGenerales.email],
    ['teléfono', datosGenerales.telefono],
    ['años programando', datosGenerales.anosDesarrollando],
    ['formación actual', datosGenerales.estudiandoActualmente],
  ]

  return (
    <section id="sobre-mi">
      <div className="wrap">
        <div className="eyebrow"><span className="dot teal" /> service/about-me</div>
        <h2>Sobre mí</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24 }}>
          <div className="card">
            <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text-dim)', marginBottom: 10 }}>
              $ cat descripcion.txt
            </div>
            <p style={{ color: 'var(--text)', fontSize: 15 }}>{resumen.texto}</p>
          </div>

          <div className="card">
            <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text-dim)', marginBottom: 10 }}>
              $ cat datos.json
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <tbody>
                {rows.map(([k, v]) => (
                  <tr key={k} style={{ borderTop: '1px solid var(--line)' }}>
                    <td style={{ padding: '8px 0', color: 'var(--text-dim)', fontFamily: 'var(--mono)', fontSize: 12 }}>{k}</td>
                    <td style={{ padding: '8px 0', textAlign: 'right' }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
