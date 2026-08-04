import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { explorers } from "@/components/data/explorers";
import { worlds } from "@/components/data/worlds";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/collection`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const worldPages = worlds.map((world) => ({
    url: `${siteConfig.url}/worlds/${world.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const explorerPages = explorers.map((explorer) => ({
    url: `${siteConfig.url}/explorer/${explorer.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...worldPages, ...explorerPages];
}