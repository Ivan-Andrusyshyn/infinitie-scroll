import React, {
  FC,
  ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import { CharacterResult } from "types/type";
import { CharacterOptionsContext } from "context/CharacterOptionsContext";

import styles from "./styles.module.css";

interface Props {
  content: CharacterResult;
}

const Card: FC<Props> = ({ content }) => {
  const options = useContext(CharacterOptionsContext);

  const activeList = options?.selected?.value ?? "character";

  return (
    <div className={styles.card}>
      {activeList === "character" && (
        <img src={content.image} alt={content.name} loading="lazy" />
      )}
      <div className={styles.wrapper}>
        <p>Name: {content.name}</p>
        <p>Species: {content.species || "--"}</p>
        <p>Type: {content.type || "--"}</p>
        <p>Gender: {content.gender || "--"}</p>
      </div>
    </div>
  );
};

export default Card;
