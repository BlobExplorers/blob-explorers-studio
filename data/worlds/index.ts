import { forestWorld } from "./forest";
import { riverWorld } from "./river";

export const worlds = [
  forestWorld,
  riverWorld,
];

export function getWorldBySlug(slug: string) {
  return worlds.find((world) => world.slug === slug);
}