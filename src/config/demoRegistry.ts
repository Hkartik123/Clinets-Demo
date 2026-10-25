import type { DemoDefinition } from "../types/demo";
import { ReelmarkPage } from "../demos/reelmark";

export const demoRegistry: DemoDefinition[] = [
  {
    slug: "reelmark",
    name: "Reelmark",
    category: "Creator marketplace",
    description:
      "A visual concept for a product-video marketplace connecting indie brands and short-form creators.",
    status: "ready",
    Component: ReelmarkPage,
  },
];

export const demoCategories = [
  ...new Set(demoRegistry.map((demo) => demo.category)),
];
