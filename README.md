# 🧟 The Walking Dead App

Aplicación web creada con **React + Vite** y estilizada con **TailwindCSS**.  
El proyecto consume la API pública de **TVMaze** para mostrar información sobre **personajes y episodios de la serie The Walking Dead**, incluyendo descripciones en español.

---

## 🚀 Tecnologías utilizadas

- [React](https://react.dev/) → Librería principal de la aplicación.
- [Vite](https://vitejs.dev/) → Generador de proyecto y servidor de desarrollo.
- [TailwindCSS](https://tailwindcss.com/) → Framework CSS para estilos rápidos y responsivos.
- [React Router](https://reactrouter.com/en/main) → Manejo de rutas internas.
- [react-error-boundary](https://github.com/bvaughn/react-error-boundary) → Manejo de errores en la UI.
- [TVMaze API](https://www.tvmaze.com/api) → Fuente de datos para personajes y episodios.

---

## 📂 Estructura de carpetas

src/
├── assets/ # Recursos estáticos
│ └── react.svg
│
├── components/ # Componentes reutilizables
│ └── Navbar.jsx
│
├── pages/ # Páginas de la aplicación
│ ├── Characters.jsx
│ ├── EpisodeDetail.jsx
│ ├── Episodes.jsx
│ └── TWDHome.jsx
│
├── services/ # Lógica de consumo API
│ └── tvmaze.js
│
├── utils/ # Utilidades
│ └── i18n.js
│
├── index.css # Estilos base de Tailwind
├── main.jsx # Punto de entrada de React
├── router.jsx # Configuración de rutas

## 📌 Funcionalidades implementadas

✅ Página inicial con introducción y foto de **The Walking Dead**  
✅ **Navbar con menú de navegación**   
✅ Ruta `/characters` → listado de personajes desde la API  
✅ Ruta `/episodes` → listado de episodios desde la API  
✅ Ruta `/episodes/:id` → detalle de episodio individual  
✅ Manejo de errores con **ErrorBoundary**  
✅ Estilos base con **TailwindCSS**  
✅ Textos traducidos al español vía archivo `utils/i18n.js`  
✅ Arquitectura modularizada (components, pages, services, utils)

---

## 📊 Comparación con los requisitos del proyecto

### **Requisitos mínimos:**
- **Uso de Vite para la generación del proyecto** ✅  
- **Crear componentes funcionales** ✅ (Navbar, páginas, etc.)  
- **Utilizar una API pública y mostrar los datos obtenidos** ✅ (TVMaze API)  
- **Uso de Hooks (mínimo useEffect)** ✅ (para llamadas a la API)  
- **Implementar rutas con React Router** ✅  
- **Manejar errores con Error Boundaries** ✅  
- **Implementación CSS con un framework** ✅ (TailwindCSS)

### **Control de versiones:**
- Repositorio en GitHub con 5 commits (README incluido) ✅

### **Despliegue:**
- Se despliega URL en GitHub Pages: https://kathyvenegas3.github.io/5.Proyecto_REACT_Aplicacionwebconreact_N5/

👩‍💻 Autora

Proyecto desarrollado por Katherine Venegascomo parte del Bootcamp Fullstack.