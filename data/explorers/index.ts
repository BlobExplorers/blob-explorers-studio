import { forestExplorers } from "./forest";
import { riverExplorers } from "./river";
import { mountainExplorers } from "./mountain";
import { volcanoExplorers } from "./volcano";
import { snowExplorers } from "./snow";
import { iceExplorers } from "./ice";

export const explorers = [
  ...forestExplorers,
  ...riverExplorers,
  ...mountainExplorers,
  ...volcanoExplorers,
  ...snowExplorers,
  ...iceExplorers,
];

export function getExplorerById(id: string) {
  return explorers.find((explorer) => explorer.id === id);
}