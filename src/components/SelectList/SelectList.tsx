import { CharacterOptionsContext } from "context/CharacterOptionsContext";
import React, { ReactNode, useContext } from "react";
import Select from "react-select";
import routes from "utils/routeList";

const SelectList: React.FC = () => {
  const options = useContext(CharacterOptionsContext);

  return (
    <Select
      options={routes}
      onChange={options?.handleChange}
      placeholder="character"
    />
  );
};

export default SelectList;
