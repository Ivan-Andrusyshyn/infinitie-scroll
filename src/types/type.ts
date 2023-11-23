interface ResponseAPI {
  info: Info;
  results: CharacterResult[];
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

interface DefaultResult {
  id: number;
  name: string;
  species: string;
  type: string;
  gender: string;
}

interface CharacterResult extends DefaultResult {
  image: string;
}

export type { ResponseAPI, Info, CharacterResult };
