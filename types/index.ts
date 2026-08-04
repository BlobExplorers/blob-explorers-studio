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
};

export type Explorer = {
  id: string;
  name: string;
  world: string;
  worldName: string;
  image: string;
  heroProp: string;
  description: string;
};