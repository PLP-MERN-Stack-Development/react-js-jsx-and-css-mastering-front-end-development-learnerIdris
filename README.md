# React Vite Tailwind Starter

This project is a starter React app scaffolded for the assignment. It uses Vite, React, React Router and Tailwind CSS. It includes:

- Reusable components (Button, Card, Navbar, Footer)
- Layout with Navbar + Footer
- Task manager with add/complete/delete/filter and localStorage persistence
- Theme (light/dark) using Tailwind dark mode and context
- API page fetching JSONPlaceholder posts with search and pagination

## Install

Open a terminal in the project folder and run:

```powershell
npm install
npm run dev
```

Then open the URL shown by Vite (usually http://localhost:5173).

## Project structure

- `src/components` - UI components
- `src/pages` - route pages (Home, Tasks, ApiData)
- `src/hooks` - custom hooks (useLocalStorage)
- `src/context` - Theme context
- `src/services` - API helper functions

## Next steps / suggestions

- Add form validation and better accessibility
- Add tests (Jest/React Testing Library)
- Improve animations and responsive breakpoints

