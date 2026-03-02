<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# Institutional Frontend (React + Vite + Tailwind)

Production-ready, multi-page frontend for an Indian professional institutional website.

## Tech Stack

- React (Vite)
- Tailwind CSS
- React Router DOM
- Axios
- Framer Motion
- React Icons
- Classnames

## Folder Structure

```text
src/
|-- assets/
|   |-- images/
|   `-- logos/
|-- components/
|   |-- layout/
|   |   |-- Navbar.jsx
|   |   |-- Footer.jsx
|   |   `-- Container.jsx
|   |-- sections/
|   |   |-- Hero.jsx
|   |   |-- AboutPreview.jsx
|   |   |-- CoursesPreview.jsx
|   |   |-- StatsSection.jsx
|   |   |-- Testimonials.jsx
|   |   `-- CTASection.jsx
|   `-- ui/
|-- pages/
|-- services/
|   `-- api.js
|-- hooks/
|-- App.jsx
|-- main.jsx
`-- index.css
```

## Environment Variables

Create `.env` from `.env.example`:

```bash
cp .env.example .env
```

Required values:

- `VITE_API_BASE_URL` (Node.js REST API base URL)
- `VITE_PROSPECTUS_URL` (optional prospectus download URL, defaults to `/prospectus.pdf`)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## API Integration

Axios instance is configured in `src/services/api.js` with:

- env-driven `baseURL`
- sample GET request: `getHealthStatus()`
- sample POST request: `postContactMessage(payload)`

The Contact page form already uses `postContactMessage`.

## Routing

- Multi-page routes configured in `src/App.jsx`
- 404 fallback page included
- Scroll-to-top hook on route change

## Render Deployment (Static Site)

1. Push this project to GitHub.
2. In Render, create a **Static Site** from the repository.
3. Use:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. Add environment variable:
   - `VITE_API_BASE_URL`
5. SPA rewrite support is included via `public/_redirects`.

## Notes

- Hero section is implemented with a ReactBits-inspired animated layout and motion styling.
- Replace `public/prospectus.pdf` placeholder with the final institution prospectus file.
>>>>>>> af693b5 (NSIC frontend update)
