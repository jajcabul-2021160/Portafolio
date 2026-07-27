import { Outlet } from 'react-router-dom'
import Navbar from '../shared/components/Navbar.jsx'

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>
        © {new Date().getFullYear()} · construido con React + Vite
      </footer>
    </>
  )
}
