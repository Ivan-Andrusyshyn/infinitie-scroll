import { useRef } from "react";

import { Card } from "components";
import { Loader } from "components";

import { useCharacter, useObserverTarget } from "hooks";
import styles from "./styles.module.css";

const CardList = () => {
  const { results, error, fetchNextPage, status } =
    useCharacter("/character/?page=");

  const observerTarget = useRef(null);

  const observer = useObserverTarget({ fetchNextPage, observerTarget });

  return (
    <ul className={styles.cardList}>
      {results &&
        results.map((character: any) => (
          <Card key={character.id} character={character} />
        ))}
      {status && <Loader />}
      <div ref={observerTarget}></div>
      {error && <p>Error: {error}</p>}
    </ul>
  );
};
export default CardList;
