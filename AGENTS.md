# Repository Guidelines
This site is a statically generated Next.js project that powers Niru Maheswaranathan's personal website. The codebase favors lean components, Markdown-backed content, and Tailwind CSS utilities.

## Project Structure & Module Organization
- `pages/` defines routes; `pages/_app.js` wires global styles, and `pages/index.js` builds the landing page.
- `components/` holds reusable UI, grouped by feature (e.g., navigation, post listings) with each file exporting a single component.
- `posts/`, `publications/`, and `repositories/` contain Markdown and YAML sources that feed static content via data loaders in `lib/`.
- `styles/` hosts Tailwind and custom CSS layers; `assets/` and `public/` store static images and favicons consumed at build time.

## Build, Test, and Development Commands
```bash
npm run dev    # start the local Next.js dev server
npm run build  # create an optimized production build
npm run start  # serve the production build locally
npm run export # emit static HTML to ./out for deployment previews
just dev       # wrapper: announces and runs npm run dev
just build     # wrapper: announces and runs npm run build
```

## Coding Style & Naming Conventions
- Use 2-space indentation, single quotes, and ES modules (`import`/`export`).
- Export top-level components with `export default function Component()`, favor arrow functions for helpers, and require PropTypes for all public props.
- Name files in camelCase (`activeLink.js`), co-locate component-specific styles, and prefer Tailwind utility classes over bespoke CSS.
- Keep React hooks at the top level, memoize expensive computations, and decompose large views into focused components.

## Testing Guidelines
- No automated test suite exists yet; block regressions by running `npm run build` before opening a PR and scanning the generated `out/` artifacts.
- For content changes, preview locally (`npm run dev`) and verify Markdown front matter renders without runtime warnings.
- When adding data loaders or parsers, include quick utility scripts under `scripts/` or tests in `__tests__/` (Jest configuration is not present, so add it alongside the new tests).

## Commit & Pull Request Guidelines
- Follow the existing Git log: short, imperative subjects (e.g., `Fix blog tag handling`) and optional scope details.
- Each PR should describe the change, link relevant issues, and include screenshots or terminal output for UI or build-facing updates.
- Note any schema or content migrations, list manual verification steps, and confirm `npm run build` completion in the PR checklist.
