import { FC, useContext, useRef } from "react";

import { Card } from "components";
import { Loader } from "components";

import { useObserverTarget } from "hooks";

import styles from "./styles.module.css";
import { CharacterOptionsContext } from "context/CharacterOptionsContext";
import { CharacterResult } from "types/type";

const CardList: FC = () => {
  const observerTarget = useRef(null);
  const options = useContext(CharacterOptionsContext);
  const observedNextPage = options?.fetchNextPage;
  const observer = useObserverTarget({ observedNextPage, observerTarget });

  return (
    <ul className={styles.cardList}>
      {options?.results &&
        options?.results.map((item: CharacterResult) => (
          <Card key={item.id} content={item} />
        ))}
      {options?.loading && <Loader />}
      <div ref={observerTarget}></div>
      {options?.error && <p>Error: {options?.error}</p>}
    </ul>
  );
};
export default CardList;
