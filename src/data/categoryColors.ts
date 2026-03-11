import type { Category, Complexity } from "./useCases";

export const categoryColor: Record<Category, string> = {
  "Everyday Life": "hsl(145, 80%, 55%)",
  "Work": "hsl(185, 60%, 65%)",
  "Multi-Agent": "hsl(260, 80%, 65%)",
  "Smart Home": "hsl(50, 80%, 55%)",
  "Unhinged": "hsl(310, 100%, 60%)",
};

export const complexityColor: Record<Complexity, string> = {
  low: "hsl(145, 80%, 55%)",
  med: "hsl(50, 80%, 55%)",
  high: "hsl(350, 90%, 55%)",
};
