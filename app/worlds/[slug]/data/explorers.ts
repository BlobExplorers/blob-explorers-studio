export const explorers = [
  {
    id: "00001",
    name: "The First Blob Explorer",
    world: "forest",
    worldName: "Forest World",
    image: "/images/worlds/forest-cover.png",
    heroProp: "Legendary Explorer Compass",
    description:
      "The first explorer and official beginning of the BlobVerse. Equipped with a legendary compass, this iconic Blob opens the path toward seventy-eight handcrafted worlds.",
  },
  {
    id: "00101",
    name: "Royal River Pathfinder",
    world: "river",
    worldName: "River World",
    image: "/images/worlds/river-cover.png",
    heroProp: "Royal River Navigation Staff",
    description:
      "The first explorer of River World, navigating crystal waterways, hidden waterfalls and ancient river passages.",
  },
  {
    id: "00201",
    name: "Mountain Peak Explorer",
    world: "mountain",
    worldName: "Mountain World",
    image: "/images/worlds/mountain-cover.png",
    heroProp: "Peak Resonance Compass",
    description:
      "The first explorer of Mountain World, charting towering peaks and ancient bridges above the clouds.",
  },
  {
    id: "00301",
    name: "Volcanic Expedition Leader",
    world: "volcano",
    worldName: "Volcano World",
    image: "/images/worlds/volcano-cover.png",
    heroProp: "Magma Expedition Staff",
    description:
      "The first explorer of Volcano World, leading expeditions across lava rivers and volcanic forges.",
  },
  {
    id: "00401",
    name: "Frozen Frontier Explorer",
    world: "snow",
    worldName: "Snow World",
    image: "/images/worlds/snow-cover.png",
    heroProp: "Frozen Frontier Compass",
    description:
      "The first explorer of Snow World, crossing frozen forests and hidden winter pathways.",
  },
  {
    id: "00501",
    name: "Glacier Trail Explorer",
    world: "ice",
    worldName: "Ice World",
    image: "/images/worlds/ice-cover.png",
    heroProp: "Glacier Trail Compass",
    description:
      "The first explorer of Ice World, navigating glowing glaciers and crystal ice caves.",
  },
] as const;

export function getExplorerById(id: string) {
  return explorers.find((explorer) => explorer.id === id);
}