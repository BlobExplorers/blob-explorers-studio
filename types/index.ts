export type World = {
  slug: string;
  number: string;
  name: string;
  subtitle: string;
  image: string;
  range: string;
  genesisId: string;
  accent: string;
  gradient: string;
  description: string;

  status: "revealed" | "hidden";
};

export type Explorer = {
  id: string;
  name: string;

  world: string;
  worldName: string;

  profession: string;
  heroProp: string;

  image: string;
  description: string;

  rarity?: string;
  status?: "revealed" | "hidden";
};