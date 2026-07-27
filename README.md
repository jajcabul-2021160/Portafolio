
# Portafolio

Proyecto React + Vite + React Router. Diseño tipo "panel de servicios"
(blueprint/terminal), coherente con arquitecturas de microservicios.

## Cómo correrlo

```bash
pnpm install
pnpm dev
```

## Cómo llenarlo con tu información

**Edita solo `src/shared/constants/data.js`.** Ahí está todo el contenido:
bienvenida, descripción, datos generales, habilidades, educación,
experiencia, galería, proyectos y redes.

## Rutas del sitio

| Ruta                     | Página                                    |
|---------------------------|--------------------------------------------|
| `/`                        | Inicio (Hero + vista rápida de proyectos) |
| `/sobre-mi`                | Sobre mí                                  |
| `/habilidades`             | Habilidades                               |
| `/educacion-experiencia`   | Educación y experiencia                   |
| `/proyectos`               | Proyectos (detallado)                     |
| `/contacto`                | Contacto                                  |

El menú de navegación (arriba, en todas las páginas) permite saltar entre
ellas directamente. Cada página independiente (todas menos Inicio) tiene
además un botón "← Regresar a Inicio" al principio.

## Estructura

```
assets/                          <- imágenes, CV en PDF, etc.
src/
  main.jsx                       <- entry point, monta <BrowserRouter>
  App.jsx                        <- define las rutas
  pages/                         <- una página por ruta (arma el layout)
    Layout.jsx                    (Navbar + <Outlet/> + Footer, compartido)
    HomePage.jsx
    AboutPage.jsx
    SkillsPage.jsx
    ResumePage.jsx
    ProjectsPage.jsx
    ContactPage.jsx
  features/                      <- el contenido real de cada sección
    hero/screens/HeroSection.jsx
    about/screens/AboutSection.jsx
    skills/screens/SkillsSection.jsx
    resume/screens/ResumeSection.jsx
    gallery/screens/GallerySection.jsx
    projects/screens/ProjectsSection.jsx
    contact/screens/ContactSection.jsx
  shared/
    components/
      Navbar.jsx                  <- menú, usa rutas reales (NavLink)
      BackButton.jsx               <- botón "Regresar a Inicio"
    constants/data.js              <- TODO el contenido editable
    styles/index.css
```

### Por qué esta separación pages/ vs features/

`features/*` sigue conteniendo el contenido visual de cada sección (igual que
antes). `pages/*` es nuevo: son componentes pequeños que arman qué se ve en
cada ruta (una sección + su botón de regresar, por ejemplo). Así, si más
adelante quieres reutilizar una sección en otro lugar, no está atada a una
ruta específica.

### Nota sobre despliegue

Este proyecto usa `BrowserRouter` (URLs limpias como `/proyectos`, sin `#`).
Vercel y Netlify manejan esto automáticamente. Si despliegas en GitHub Pages,
vas a necesitar configurar un redirect a `index.html` para rutas desconocidas
(o cambiar a `HashRouter` si prefieres evitarte ese paso — avísame y te
ayudo con el cambio).

## Build para producción

```bash
pnpm build
```

