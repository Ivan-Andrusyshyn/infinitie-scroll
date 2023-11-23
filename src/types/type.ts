export interface ResponseAPI {
  info: Info;
  results: CharacterResult[];
}

export interface Info {
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

export interface CharacterResult extends DefaultResult {
  image: string;
}
