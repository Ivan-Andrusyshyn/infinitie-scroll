import React, { ReactNode, useContext } from "react";
import Select from "react-select";

import activeList from "utils/activeList";
import { CharacterOptionsContext } from "context/CharacterOptionsContext";

const SelectList: React.FC = () => {
  const options = useContext(CharacterOptionsContext);

  return (
    <Select
      options={activeList}
      onChange={options?.handleChange}
      placeholder="character"
    />
  );
};

export default SelectList;
