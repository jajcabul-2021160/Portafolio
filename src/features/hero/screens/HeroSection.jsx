import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { hero } from '../../../shared/constants/data.js'

// Efecto de "escritura" tipo terminal para el comando whoami.
function useTypewriter(text, speed = 45, startDelay = 300) {
  const [out, setOut] = useState('')
  useEffect(() => {
    let i = 0
    let timer
    const start = setTimeout(() => {
      timer = setInterval(() => {
        i++
        setOut(text.slice(0, i))
        if (i >= text.length) clearInterval(timer)
      }, speed)
    }, startDelay)
    return () => { clearTimeout(start); clearInterval(timer) }
  }, [text, speed, startDelay])
  return out
}

export default function Hero() {
  const typed = useTypewriter(hero.nombre, 55)
  const done = typed.length === hero.nombre.length

  return (
    <section id="inicio" style={{ borderBottom: '1px solid var(--line)', paddingTop: 96 }}>
      <div className="wrap">
        <div className="eyebrow"><span className="dot" /> sistema en línea</div>
        <div
          className="card"
          style={{
            maxWidth: 620,
            fontFamily: 'var(--mono)',
            fontSize: 14,
            padding: '18px 20px',
            marginBottom: 28,
          }}
        >
          <div style={{ color: 'var(--text-dim)', marginBottom: 6 }}></div>
          <div style={{ fontSize: 22, color: 'var(--text)' }}>
            {typed}
            <span style={{ opacity: done ? 0 : 1 }}>▌</span>
          </div>
        </div>

        <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', maxWidth: 780 }}>
          {hero.rol}
        </h1>
        <p style={{ fontSize: 17, maxWidth: 560, marginTop: 16 }}>
          “{hero.frase}”
        </p>

        <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
          <Link to="/proyectos" className="btn">ver proyectos →</Link>
          <Link to="/contacto" className="btn btn-ghost">contacto</Link>
        </div>
      </div>
    </section>
  )
}
