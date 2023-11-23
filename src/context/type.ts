import { SingleValue } from "react-select";
import { CharacterResult } from "types/type";

interface SelectContextType {
  selected: null | SingleValue<{ value: string; label: string }>;
  handleChange: (
    newValue: SingleValue<{ value: string; label: string }>
  ) => void;
  loading: boolean;
  results: CharacterResult[];
  error: string | null;
  fetchNextPage: () => void;
}

interface SelectedType {
  value: string;
  label: string;
}

export type { SelectContextType, SelectedType };
