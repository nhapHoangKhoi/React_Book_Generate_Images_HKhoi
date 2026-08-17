# Book Illustration Studio — frontend

React + Vite + TypeScript. Talks to the Spring Boot backend in
`Project_Book_Generate_Images/springboot-book-generate-images`.

> This folder is temporary. It moves into the backend repo as `frontend/` before submission, so
> the whole project ships as one repo with one README and one start command.

## Running

Start the backend first (port 8080), then:

```bash
npm install
npm run dev
```

Open http://localhost:5173. Vite proxies everything under `/api` to `http://localhost:8080`, so the
browser stays on one origin and there is no CORS configuration on either side.

```bash
npm test          # component + hook tests
npm run build     # type-check and production bundle
```

## How it fits together

- `src/api/` — the typed client. One `request()` wrapper attaches `X-User-Id` and turns non-2xx
  responses into `ApiError` with the server's `code`, which is what the UI branches on.
- `src/auth/session.ts` — the only thing kept in `localStorage`: who is signed in. Project state is
  always fetched, never cached, which is what makes refresh and multi-tab behave.
- `src/hooks/useProject.ts` — loads a project and polls every 2s while a step is `RUNNING`. A 409
  `ALREADY_RUNNING` is not shown as an error: it means another tab owns the step, so the hook
  re-reads instead.
- `src/components/StepPanel.tsx` — the one action for wherever the project is, in five states:
  finished, stranded, failed, running, ready.
- `src/styles/app.css` — design tokens taken from the Gradion system in `app-demo.html`.
