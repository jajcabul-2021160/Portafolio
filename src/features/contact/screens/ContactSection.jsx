import { redes, datosGenerales } from '../../../shared/constants/data.js'

export default function Contact() {
  const links = [
    { nombre: 'LinkedIn', url: redes.linkedin },
    { nombre: 'GitHub', url: redes.github },
  ]

  return (
    <section id="contacto" style={{ borderBottom: 'none' }}>
      <div className="wrap">
        <div className="eyebrow"><span className="dot" /> service/contact</div>
        <h2>Conectemos</h2>
        <p style={{ maxWidth: 480, marginBottom: 24 }}>
          {datosGenerales.email} · {datosGenerales.telefono}
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {links.map((l) => (
            <a key={l.nombre} href={l.url} target="_blank" rel="noreferrer" className="btn">
              {l.nombre} →
            </a>
          ))}
          <a href={redes.cv} download="CV_Joaquin_Ajcabul.pdf" className="btn btn-ghost">
            Descargar mi CV ↓
          </a>
        </div>
      </div>
    </section>
  )
}
