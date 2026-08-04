import { siteConfig } from "@/config/site";

export function getRevealedWorldCount() {
  return siteConfig.launchWorlds;
}

export function getHiddenWorldCount() {
  return siteConfig.totalWorlds - getRevealedWorldCount();
}

export function isFullReveal() {
  return getRevealedWorldCount() === siteConfig.totalWorlds;
}