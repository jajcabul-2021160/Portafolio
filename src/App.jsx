import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import SkillsPage from './pages/SkillsPage.jsx'
import ResumePage from './pages/ResumePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-mi" element={<AboutPage />} />
        <Route path="/habilidades" element={<SkillsPage />} />
        <Route path="/educacion-experiencia" element={<ResumePage />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}
