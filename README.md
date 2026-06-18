# OrbitCare

OrbitCare is a modern Next.js frontend for a wellness space management service. It includes a public marketing website and a SPA-style admin dashboard with mocked data, local CRUD, Zustand state management, charts, filters, theme switching, forms, and responsive layouts.

## Stack

- Next.js + React + TypeScript
- Zustand for state management
- TailwindCSS for UI styling
- Recharts for analytics
- Lucide React icons

## Features

- Public website: home, services, concept/about, contact
- Admin SPA: login mock, dashboard, bookings, services CRUD, clients, analytics, settings
- Local mock data with loading and error states
- Realtime search, filters, sorting, layout switching
- Dark theme, toasts, empty states, custom 404
- Responsive desktop and mobile interface

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Mock admin credentials:

- Email: `admin@orbitcare.app`
- Password: `orbit2026`

## Build

```bash
npm run build
npm run start
```

## Repository

Create a GitHub or GitLab repository, then push:

```bash
git init
git add .
git commit -m "Create OrbitCare frontend service"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```
