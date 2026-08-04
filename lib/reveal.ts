import { collection } from "@/config/collection";

export function getRevealedWorldCount(): number {
  return Number(collection.revealedWorlds);
}

export function getHiddenWorldCount(): number {
  return Number(collection.totalWorlds) - Number(collection.revealedWorlds);
}

export function isFullReveal(): boolean {
  return getRevealedWorldCount() >= Number(collection.totalWorlds);
}