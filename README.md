# NKSKILLEDGE Demo Studio

A responsive internal portfolio for building and previewing independent client-facing website demos. Demo 01, Reelmark, is registered as a standalone concept landing page.

## Architecture

- **React + TypeScript + Vite** for a fast, typed web app with a straightforward build.
- **React Router** separates the Studio, demo previews, and helpful not-found states.
- Each demo is an independent folder and page component. The registry is the single source used to list and route registered demos.
- The Studio's styles are separate from future demo styles. Scope demo CSS to the demo's own root class or use CSS Modules.
- All interactions should use clearly labeled local sample data. Do not connect a demo to production services unless explicitly requested.

## Structure

```text
public/
  favicon.svg
src/
  app/                  Application shell and route definitions
  components/
    cards/              Demo library cards
    common/             Shared Studio components
    layout/             Studio navigation and page frame
  config/
    demoRegistry.ts     Available demos and categories
  demos/
    reelmark/           Demo 01: components, data, local photo posters and scoped styles
  pages/                Studio home, workflow, and route fallbacks
  styles/               Studio-wide styles
  types/                Shared TypeScript types
docs/
  ADDING_A_NEW_DEMO.md  Step-by-step implementation guide
```

## Requirements

- Node.js 20.19+ or 22.12+ (Node.js 22.14+ recommended)
- npm 10+

## Install and run

From the project folder in VS Code's terminal:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173/`). The Studio home is `/`; Reelmark is available at `/demos/reelmark`. Demo routes render independently from the Studio shell.

## Build and preview

```bash
npm run build
npm run preview
```

The build runs the TypeScript check before producing the static site in `dist/`. `npm run preview` serves that production build locally.

## Add a demo

1. Create an isolated `src/demos/<demo-name>/` folder for the demo's components, pages, data, assets, and scoped styles.
2. Implement its experience as a page component, using local sample data and functional front-end interactions.
3. Add a `DemoDefinition` entry in `src/config/demoRegistry.ts`, including a unique URL-safe `slug`, name, category, description, status, and component.
4. Start the development server and open `/demos/<slug>`. The registered demo will also appear in the Studio library and category filters.
5. Run `npm run build` and check the demo at mobile and desktop widths before sharing it.

See [docs/ADDING_A_NEW_DEMO.md](docs/ADDING_A_NEW_DEMO.md) for the full workflow and a registry example.

## Routes

- `/` — private Demo Studio dashboard
- `/adding-a-demo` — in-app quick-start workflow
- `/demos/reelmark` — Reelmark concept landing page
- `/demos/:demoSlug` — independent demo preview route
- Unknown paths — Studio not-found page

React Router and Vite's development/preview fallback support direct navigation to these paths.

## Assets and styling

- Put shared static assets in `public/` and reference them with root-relative URLs such as `/demo-assets/brand.svg`.
- Put demo-specific imported assets alongside that demo's source files.
- Prefer stable, local images over unverified remote URLs.
- Scope plain demo CSS under a unique demo root class, or use CSS Modules, to prevent styles leaking between the Studio and demos.

## Demo 01: Reelmark

- **ID:** `reelmark`
- **Technology:** React + TypeScript + scoped CSS, integrated with the shared Vite app
- **Entry point:** `src/demos/reelmark/pages/ReelmarkPage.tsx`
- **Assets:** `src/demos/reelmark/assets/`
- **Preview:** `/demos/reelmark`
- **Development:** `npm run dev`
- **Production build:** `npm run build`

Ten locally stored, optimized Unsplash photographs provide product still posters; their source IDs are listed in `src/demos/reelmark/assets/assetSources.ts`. Reelmark has support for individual licensed MP4/WebM sources through each reel's optional `videoSrc`, with poster fallback and a clear still-preview label. No creator video footage was supplied, so the current carousel displays still photos rather than claiming to play videos. Replace the WebP posters with appropriately licensed local exports and add a distinct `videoSrc` for each clip in `src/demos/reelmark/data/videos.ts` when footage is available.

To add Demo 02, create a new isolated folder under `src/demos/`, give it a unique root-scoped stylesheet, export its page from its own `index.ts`, and add one entry to `src/config/demoRegistry.ts`. Do not modify Reelmark or its assets; see [docs/ADDING_A_NEW_DEMO.md](docs/ADDING_A_NEW_DEMO.md).

## Troubleshooting

- **Install or build errors:** check `node --version` and use Node.js 20.19+ or 22.12+; then run `npm install` again.
- **A demo route says it is missing:** confirm its slug and component are registered in `src/config/demoRegistry.ts`.
- **A direct route returns a 404 on a host:** configure that static host to serve `index.html` for client-side routes.
- **Assets do not load:** public assets use `/...` URLs; imported assets should use relative imports from the demo source.
- **Styles affect another demo:** add a unique root class or convert the styles to CSS Modules.
