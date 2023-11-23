import { FC, useContext, useRef } from "react";

import { Card } from "components";
import { Loader } from "components";

import { useObserver } from "hooks";
import { CharacterOptionsContext } from "context/CharacterOptionsContext";

import { CharacterResult } from "types/type";

import styles from "./styles.module.css";

const CardList: FC = () => {
  const observerTarget = useRef(null);
  const options = useContext(CharacterOptionsContext);
  const observedNextPage = options?.fetchNextPage;
  const observer = useObserver({ observedNextPage, observerTarget });

  return (
    <ul className={styles.cardList}>
      {options?.results &&
        options?.results.map((item: CharacterResult) => (
          <Card key={item.id} content={item} />
        ))}
      <li ref={observerTarget} className={styles.observedContainer}>
        {options?.loading && <Loader />}
        {options?.error && <p>Error: {options?.error}</p>}
      </li>
    </ul>
  );
};

export default CardList;
