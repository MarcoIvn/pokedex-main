export interface Pokemon {
  name: string;
  id: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  moves: Move[];
  species: Specie;
  abilities?: Ability[]; // Nuevas propiedades
  cries?: Cries;
  stats?: Stat[];
}

interface Move {
  move: {
    name: string;
  };
}

interface Specie {
  name: string;
}

interface Ability {
  ability: {
    name: string;
  };
}

interface Stat {
  stat: {
    name: string;
  };
  base_stat: number;
}

interface Cries {
  latest: string;
  legacy: string;
}