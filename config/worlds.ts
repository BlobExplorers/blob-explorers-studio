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
    status: "revealed",
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
    status: "revealed",
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
    status: "revealed",
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
    status: "revealed",
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
    status: "revealed",
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
    status: "revealed",
  },

  {
    slug: "desert",
    number: "07",
    name: "Desert World",
    subtitle: "Cross the Endless Golden Frontier",
    image: "/images/worlds/desert-cover.png",
    range: "#00601–#00700",
    genesisId: "00601",
    accent: "text-amber-400",
    gradient: "from-amber-500/30 via-orange-950/70 to-black",
    description:
      "A vast golden realm of ancient dunes, forgotten ruins and mysterious desert paths stretching beyond the horizon.",
    status: "hidden",
  },

  {
    slug: "sky",
    number: "08",
    name: "Sky Kingdom",
    subtitle: "Journey Above the Clouds",
    image: "/images/worlds/sky-cover.png",
    range: "#00701–#00800",
    genesisId: "00701",
    accent: "text-sky-300",
    gradient: "from-sky-400/30 via-blue-950/70 to-black",
    description:
      "A breathtaking kingdom above the clouds, filled with floating realms, celestial pathways and endless skies.",
    status: "hidden",
  },

  {
    slug: "space",
    number: "09",
    name: "Space Kingdom",
    subtitle: "Explore Beyond the Stars",
    image: "/images/worlds/space-cover.png",
    range: "#00801–#00900",
    genesisId: "00801",
    accent: "text-violet-300",
    gradient: "from-violet-500/30 via-indigo-950/80 to-black",
    description:
      "A cosmic realm of distant planets, mysterious stars and extraordinary discoveries beyond the known universe.",
    status: "hidden",
  },

  {
    slug: "underwater",
    number: "10",
    name: "Underwater World",
    subtitle: "Discover the Depths",
    image: "/images/worlds/underwater-cover.png",
    range: "#00901–#01000",
    genesisId: "00901",
    accent: "text-cyan-300",
    gradient: "from-cyan-500/30 via-blue-950/80 to-black",
    description:
      "A mysterious underwater realm of ancient ruins, glowing reefs and hidden depths waiting to be explored.",
    status: "hidden",
  },

  {
    slug: "crystal",
    number: "11",
    name: "Crystal World",
    subtitle: "Enter the Realm of Living Crystals",
    image: "/images/worlds/crystal-cover.png",
    range: "#01001–#01100",
    genesisId: "01001",
    accent: "text-fuchsia-300",
    gradient: "from-fuchsia-500/30 via-purple-950/80 to-black",
    description:
      "A radiant kingdom formed from enormous crystals, luminous caverns and mysterious mineral landscapes.",
    status: "hidden",
  },

  {
    slug: "clockwork",
    number: "12",
    name: "Clockwork World",
    subtitle: "Discover the Mechanical Realm",
    image: "/images/worlds/clockwork-cover.png",
    range: "#01101–#01200",
    genesisId: "01101",
    accent: "text-amber-300",
    gradient: "from-amber-500/30 via-zinc-950/80 to-black",
    description:
      "A mechanical world of enormous gears, precision machines, brass structures and ingenious inventions.",
    status: "hidden",
  },

  {
    slug: "dragon",
    number: "13",
    name: "Dragon World",
    subtitle: "Enter the Realm of Ancient Dragons",
    image: "/images/worlds/dragon-cover.png",
    range: "#01201–#01300",
    genesisId: "01201",
    accent: "text-red-300",
    gradient: "from-red-500/30 via-orange-950/80 to-black",
    description:
      "An ancient realm of legendary dragons, powerful relics, dramatic mountains and forgotten civilizations.",
    status: "hidden",
  },

  {
    slug: "enchanted-jungle",
    number: "14",
    name: "Enchanted Jungle World",
    subtitle: "Explore the Magical Wilds",
    image: "/images/worlds/enchanted-jungle-cover.png",
    range: "#01301–#01400",
    genesisId: "01301",
    accent: "text-lime-300",
    gradient: "from-lime-500/30 via-green-950/80 to-black",
    description:
      "A magical jungle filled with enormous plants, hidden temples, glowing pathways and unexplored wilderness.",
    status: "hidden",
  },

  {
    slug: "mushroom",
    number: "15",
    name: "Mushroom World",
    subtitle: "Enter the Fungal Kingdom",
    image: "/images/worlds/mushroom-cover.png",
    range: "#01401–#01500",
    genesisId: "01401",
    accent: "text-pink-300",
    gradient: "from-pink-500/30 via-purple-950/80 to-black",
    description:
      "A fantastical fungal realm filled with giant mushrooms, glowing forests and mysterious hidden paths.",
    status: "hidden",
  },

  {
    slug: "shadow",
    number: "16",
    name: "Shadow World",
    subtitle: "Enter the Realm of Mystery",
    image: "/images/worlds/shadow-cover.png",
    range: "#01501–#01600",
    genesisId: "01501",
    accent: "text-purple-300",
    gradient: "from-purple-500/30 via-slate-950/90 to-black",
    description:
      "A mysterious realm of deep shadows, forgotten structures and secrets hidden beyond the edge of discovery.",
    status: "hidden",
  },

  {
    slug: "moon",
    number: "17",
    name: "Moon World",
    subtitle: "Explore the Lunar Frontier",
    image: "/images/worlds/moon-cover.png",
    range: "#01601–#01700",
    genesisId: "01601",
    accent: "text-indigo-200",
    gradient: "from-indigo-400/30 via-slate-950/90 to-black",
    description:
      "A serene lunar realm of silver landscapes, mysterious craters and ancient discoveries beneath a cosmic sky.",
    status: "hidden",
  },

  {
    slug: "sun",
    number: "18",
    name: "Sun World",
    subtitle: "Enter the Realm of Eternal Light",
    image: "/images/worlds/sun-cover.png",
    range: "#01701–#01800",
    genesisId: "01701",
    accent: "text-yellow-300",
    gradient: "from-yellow-500/30 via-orange-950/80 to-black",
    description:
      "A radiant world of golden landscapes, brilliant light and powerful solar discoveries.",
    status: "hidden",
  },

  {
    slug: "celestial",
    number: "19",
    name: "Celestial World",
    subtitle: "Discover the Heavenly Realm",
    image: "/images/worlds/celestial-cover.png",
    range: "#01801–#01900",
    genesisId: "01801",
    accent: "text-blue-200",
    gradient: "from-blue-400/30 via-indigo-950/80 to-black",
    description:
      "A majestic celestial realm of heavenly landscapes, luminous structures and extraordinary cosmic wonders.",
    status: "hidden",
  },

  {
    slug: "ancient",
    number: "20",
    name: "Ancient World",
    subtitle: "Walk Through Forgotten History",
    image: "/images/worlds/ancient-cover.png",
    range: "#01901–#02000",
    genesisId: "01901",
    accent: "text-stone-300",
    gradient: "from-stone-500/30 via-stone-950/80 to-black",
    description:
      "A legendary realm of ancient civilizations, monumental ruins and forgotten secrets waiting to be rediscovered.",
    status: "hidden",
  },

  {
    slug: "pirate",
    number: "21",
    name: "Pirate World",
    subtitle: "Sail Beyond the Known Horizon",
    image: "/images/worlds/pirate-cover.png",
    range: "#02001–#02100",
    genesisId: "02001",
    accent: "text-amber-300",
    gradient: "from-amber-500/30 via-slate-950/80 to-black",
    description:
      "A legendary maritime realm of mysterious islands, hidden treasures and adventurous voyages across dangerous seas.",
    status: "hidden",
  },

  {
    slug: "thunder",
    number: "22",
    name: "Thunder World",
    subtitle: "Enter the Realm of Lightning",
    image: "/images/worlds/thunder-cover.png",
    range: "#02101–#02200",
    genesisId: "02101",
    accent: "text-blue-300",
    gradient: "from-blue-500/30 via-slate-950/80 to-black",
    description:
      "A powerful storm realm of lightning, thunderous skies and extraordinary electrical forces.",
    status: "hidden",
  },

  {
    slug: "arcane-wizard",
    number: "23",
    name: "Arcane Wizard World",
    subtitle: "Discover the Realm of Magic",
    image: "/images/worlds/arcane-wizard-cover.png",
    range: "#02201–#02300",
    genesisId: "02201",
    accent: "text-violet-300",
    gradient: "from-violet-500/30 via-purple-950/80 to-black",
    description:
      "A magical realm of arcane knowledge, enchanted towers, mystical artifacts and ancient wizardry.",
    status: "hidden",
  },

  {
    slug: "spirit",
    number: "24",
    name: "Spirit World",
    subtitle: "Enter the Realm Beyond",
    image: "/images/worlds/spirit-cover.png",
    range: "#02301–#02400",
    genesisId: "02301",
    accent: "text-teal-200",
    gradient: "from-teal-500/30 via-slate-950/80 to-black",
    description:
      "A mystical realm filled with spiritual energy, ancient pathways and mysterious forces beyond the ordinary world.",
    status: "hidden",
  },

  {
    slug: "prehistoric",
    number: "25",
    name: "Prehistoric World",
    subtitle: "Journey Into the Ancient Wild",
    image: "/images/worlds/prehistoric-cover.png",
    range: "#02401–#02500",
    genesisId: "02401",
    accent: "text-emerald-300",
    gradient: "from-emerald-500/30 via-amber-950/70 to-black",
    description:
      "A primeval world of ancient landscapes, colossal creatures, fossil discoveries and untamed wilderness.",
    status: "hidden",
  },

  {
    slug: "samurai",
    number: "26",
    name: "Samurai World",
    subtitle: "Walk the Path of Honor",
    image: "/images/worlds/samurai-cover.png",
    range: "#02501–#02600",
    genesisId: "02501",
    accent: "text-red-300",
    gradient: "from-red-500/30 via-slate-950/80 to-black",
    description:
      "A legendary realm inspired by ancient warrior traditions, majestic architecture and disciplined exploration.",
    status: "hidden",
  },

  {
    slug: "imperial",
    number: "27",
    name: "Imperial World",
    subtitle: "Enter the Grand Empire",
    image: "/images/worlds/imperial-cover.png",
    range: "#02601–#02700",
    genesisId: "02601",
    accent: "text-yellow-300",
    gradient: "from-yellow-500/30 via-red-950/80 to-black",
    description:
      "A magnificent imperial realm of grand palaces, ceremonial architecture and powerful royal traditions.",
    status: "hidden",
  },

  {
    slug: "tropical-island",
    number: "28",
    name: "Tropical Island World",
    subtitle: "Discover the Paradise Isles",
    image: "/images/worlds/tropical-island-cover.png",
    range: "#02701–#02800",
    genesisId: "02701",
    accent: "text-teal-300",
    gradient: "from-teal-500/30 via-cyan-950/70 to-black",
    description:
      "A vibrant tropical realm of turquoise waters, lush islands, hidden beaches and adventurous discoveries.",
    status: "hidden",
  },

  {
    slug: "storm",
    number: "29",
    name: "Storm World",
    subtitle: "Enter the Heart of the Tempest",
    image: "/images/worlds/storm-cover.png",
    range: "#02801–#02900",
    genesisId: "02801",
    accent: "text-blue-300",
    gradient: "from-blue-500/30 via-slate-950/90 to-black",
    description:
      "A dramatic storm realm of powerful winds, dark clouds, rain and immense atmospheric energy.",
    status: "hidden",
  },

  {
    slug: "floating-islands",
    number: "30",
    name: "Floating Islands Kingdom",
    subtitle: "Rise Into the Eternal Sky",
    image: "/images/worlds/floating-islands-cover.png",
    range: "#02901–#03000",
    genesisId: "02901",
    accent: "text-sky-200",
    gradient: "from-sky-400/30 via-indigo-950/80 to-black",
    description:
      "A breathtaking kingdom of floating islands, celestial bridges, cloud realms and mysterious worlds suspended above the endless sky.",
    status: "hidden",
  },
];

export function getWorldBySlug(slug: string) {
  return worlds.find((world) => world.slug === slug);
}