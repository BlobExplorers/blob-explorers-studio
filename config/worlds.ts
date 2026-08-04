import type { World } from "@/types";

export const worlds: World[] = [
  {
    slug: "forest",
    number: "01",
    name: "Forest World",
    subtitle: "The Beginning of the BlobVerse",
    image: "/images/worlds/forest-cover.png",
    range: "#00001–#00100",
    genesisId: "00001",
    accent: "text-emerald-400",
    gradient: "from-emerald-500/30 via-green-950/70 to-black",
    description:
      "Forest World is the first chapter of the Blob Explorers journey—an enchanted kingdom filled with ancient woodland paths, glowing lanterns, hidden waterfalls and emerald discoveries.",
  },
  {
    slug: "river",
    number: "02",
    name: "River World",
    subtitle: "Follow the Flow of Discovery",
    image: "/images/worlds/river-cover.png",
    range: "#00101–#00200",
    genesisId: "00101",
    accent: "text-cyan-400",
    gradient: "from-cyan-500/30 via-blue-950/70 to-black",
    description:
      "River World is a flowing kingdom of crystal waterways, hidden waterfalls, ancient bridges and legendary river passages.",
  },
  {
    slug: "mountain",
    number: "03",
    name: "Mountain World",
    subtitle: "Rise Above the Clouds",
    image: "/images/worlds/mountain-cover.png",
    range: "#00201–#00300",
    genesisId: "00201",
    accent: "text-slate-300",
    gradient: "from-slate-400/30 via-slate-900/80 to-black",
    description:
      "Mountain World is a majestic realm of towering peaks, ancient bridges and daring expeditions high above the clouds.",
  },
  {
    slug: "volcano",
    number: "04",
    name: "Volcano World",
    subtitle: "Explore the Realm of Fire",
    image: "/images/worlds/volcano-cover.png",
    range: "#00301–#00400",
    genesisId: "00301",
    accent: "text-orange-400",
    gradient: "from-red-500/30 via-red-950/70 to-black",
    description:
      "Volcano World is a blazing kingdom of lava rivers, volcanic forges and fearless expeditions through molten mountain passages.",
  },
  {
    slug: "snow",
    number: "05",
    name: "Snow World",
    subtitle: "Cross the Frozen Frontier",
    image: "/images/worlds/snow-cover.png",
    range: "#00401–#00500",
    genesisId: "00401",
    accent: "text-sky-300",
    gradient: "from-sky-300/20 via-slate-900/80 to-black",
    description:
      "Snow World is a magical winter realm of frozen forests, snowy mountains and hidden frontier pathways.",
  },
  {
    slug: "ice",
    number: "06",
    name: "Ice World",
    subtitle: "Discover the Crystal Kingdom",
    image: "/images/worlds/ice-cover.png",
    range: "#00501–#00600",
    genesisId: "00501",
    accent: "text-cyan-300",
    gradient: "from-cyan-300/20 via-blue-950/80 to-black",
    description:
      "Ice World is a luminous realm of glowing glaciers, crystal caves and legendary frozen trails.",
  },
];

export function getWorldBySlug(slug: string) {
  return worlds.find((world) => world.slug === slug);
}