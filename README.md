# MinSU User Management, Authentication & Access Control

Standalone React workspace for the user-management segment of the MinSU
Disciplinary System. It uses the same Firebase Auth and Firestore approach as
the main application.

## Start the project

```powershell
npm install
npm run dev
```

## Firebase configuration

Copy `.env.example` to `.env.local` and fill in the Firebase Web App settings
from the Firebase console. Do not commit `.env.local`.

The Firebase client is initialized in `src/lib/firebase.js`. The initial
workspace does not create demo users or apply access rules; those should be
implemented and tested before connecting it to real data.

## Segment scope

- Authentication: sign-in, registration policy, and password recovery.
- User management: user profiles, roles, and account lifecycle.
- Access control: role-based navigation and Firebase security rules.

## Scripts

- `npm run dev` — start the local Vite development server.
- `npm run build` — create a production build.
- `npm run lint` — run Oxlint.
- `npm run preview` — preview the production build locally.
