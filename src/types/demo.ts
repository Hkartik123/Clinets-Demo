import type { ComponentType } from "react";

export type DemoStatus = "ready" | "in-development";

export interface DemoDefinition {
  slug: string;
  name: string;
  category: string;
  description: string;
  status: DemoStatus;
  Component: ComponentType;
}
