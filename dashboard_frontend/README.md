# Lightweight React Template for KAVIA

This project provides a minimal React template with a clean, modern UI and minimal dependencies.

## Dashboard (No-Scroll 25-Card Grid)

The app renders a responsive dashboard with exactly 25 cards that always fit within the viewport without vertical or horizontal scrollbars.

Implementation notes:
- Grid uses exactly 5 rows via `grid-template-rows: repeat(5, 1fr)`.
- Columns are responsive using `repeat(auto-fit, minmax(var(--min-col), 1fr))`.
- The grid container height is `calc(100vh - topbarHeight)`, ensuring full-viewport fit.
- `html, body, #root { height: 100%; overflow: hidden; }` to prevent scrollbars.
- Card typography and paddings are fluid via `clamp()` to remain readable.
- A bottom-right circular mic button plays a short click sound (data URI) and respects safe-area insets.

Main files:
- `src/App.js` – App entry rendering the `Dashboard`, `Card`, and floating mic button.
- `src/App.css` – Theme variables, no-scroll layout, grid, and component styles.
- `src/index.css` – Global baseline and hidden overflow.

Theme:
- Follows "Ocean Professional" palette (blue primary, amber secondary), subtle shadows, rounded corners.

Accessibility:
- Mic button has `aria-label`, focus-visible outline, and proper button semantics.
- Cards expose a `role="group"` with label.

## Scripts

- `npm start` – Start development server at http://localhost:3000
- `npm test` – Test runner
- `npm run build` – Production build

