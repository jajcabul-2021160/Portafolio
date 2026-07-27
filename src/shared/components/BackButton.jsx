import { Link } from 'react-router-dom'

export default function BackButton() {
  return (
    <div className="wrap" style={{ paddingTop: 32 }}>
      <Link to="/" className="btn btn-ghost" style={{ fontSize: 13 }}>
        ← Regresar a Inicio
      </Link>
    </div>
  )
}
