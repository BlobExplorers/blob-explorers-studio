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
      "The first chapter of the Blob Explorers journey — an enchanted woodland realm filled with ancient paths, hidden waterfalls, glowing discoveries and the spirit of exploration.",
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
      "A flowing realm of crystal waterways, hidden waterfalls, ancient bridges and mysterious passages waiting to be explored.",
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
      "A majestic alpine realm of towering peaks, ancient bridges and daring expeditions rising high above the clouds.",
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
      "A blazing kingdom of lava rivers, volcanic forges and dangerous passages where every expedition leads deeper into the realm of fire.",
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
      "A magical winter realm of frozen forests, snow-covered mountains and unexplored frontier paths beneath an endless frozen sky.",
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
      "A luminous frozen realm of glowing glaciers, crystalline caves and mysterious trails hidden deep within the ice.",
  },
];

export function getWorldBySlug(slug: string) {
  return worlds.find((world) => world.slug === slug);
}