import React, { FC, createContext, useState } from "react";
import { SingleValue } from "react-select";

import { SelectContextType, SelectedType } from "./type";

import { useCharacter } from "hooks";

interface Props {
  children: React.ReactNode;
}

export const CharacterOptionsContext = createContext<SelectContextType | null>(
  null
);

const CharacterOptionsProvider: FC<Props> = ({ children }) => {
  const [selected, setSelected] = useState<null | SelectedType>(null);

  const activeUrl = selected?.value ?? "character";

  const {
    results = [],
    error,
    setData,
    fetchNextPage,
    loading,
  } = useCharacter(`/${activeUrl}/?page=`, activeUrl);

  const handleChange = (
    newValue: SingleValue<{ value: string; label: string }>
  ) => {
    setSelected(newValue);
    setData(null);
    fetchNextPage();
  };

  return (
    <CharacterOptionsContext.Provider
      value={{ selected, handleChange, loading, fetchNextPage, results, error }}
    >
      {children}
    </CharacterOptionsContext.Provider>
  );
};

export default CharacterOptionsProvider;
