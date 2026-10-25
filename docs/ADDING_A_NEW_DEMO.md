# Adding a new client demo

Use this workflow for each client concept. The existing Demo 01, Reelmark, is registered at `/demos/reelmark`; leave its folder and scoped styles independent when adding future work. A demo should be a useful, responsive preview on its own and must not imply that a real order, booking, account, or payment has been completed.

## 1. Create a demo folder

Use a short, URL-friendly name under `src/demos/`. Add only the folders the demo needs:

```text
src/demos/<demo-name>/
  components/
  data/
  pages/
  styles/
  index.ts
```

Keep the demo's branding, layout, and page components independent. Store demo-specific images with its source, or use `public/demo-assets/<demo-name>/` for static public files.

## 2. Implement the experience

- Build the demo as React page components with realistic, clearly labeled local mock data.
- Make its navigation and primary buttons work; provide useful empty, error, and confirmation states where relevant.
- Use a unique root class or CSS Modules so styles cannot leak into the Studio or another demo.
- Check keyboard navigation, accessible labels, color contrast, and mobile, tablet, and desktop layouts.
- Do not connect production databases, accounts, payment gateways, or customer data.

## 3. Export the demo page

For example, create `src/demos/cafe/pages/CafeHome.tsx` and export its page component from `src/demos/cafe/index.ts`:

```tsx
export { default as CafeHome } from "./pages/CafeHome";
```

The component passed to the registry becomes the page rendered at that demo's route. It can own its own navigation and page layout.

## 4. Register the demo

Add the component and one entry to `src/config/demoRegistry.ts`:

```tsx
import { CafeHome } from "../demos/cafe";
import type { DemoDefinition } from "../types/demo";

export const demoRegistry: DemoDefinition[] = [
  {
    slug: "cafe",
    name: "Cafe & Bakery",
    category: "Food & drink",
    description: "A warm neighborhood cafe experience with a sample menu.",
    status: "ready",
    Component: CafeHome,
  },
];

export const demoCategories = [
  ...new Set(demoRegistry.map((demo) => demo.category)),
];
```

Use a unique URL-safe slug. Set `status` to `"in-development"` until the experience is ready for a client preview; update it to `"ready"` when complete. Registration adds the demo card, search/filter behavior, and `/demos/cafe` route automatically.

## 5. Verify and preview

```bash
npm run dev
npm run build
```

Open `/demos/<slug>` directly and through the Studio card. Check the main interactions, responsive layouts, keyboard focus, and browser console. The app uses Vite's history fallback for local direct-route visits.
