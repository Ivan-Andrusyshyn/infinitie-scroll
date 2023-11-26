import { FC, useContext, useEffect, useRef } from "react";
import RenderIfVisible from "react-render-if-visible";

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
  const { isVisible } = useObserver({ observedNextPage, observerTarget });

  console.log(options?.results);
  return (
    <ul className={styles.cardList}>
      {options?.results &&
        options?.results.map((item: CharacterResult) => (
          <RenderIfVisible
            initialVisible
            rootElement={"li"}
            root={document.body}
            key={item.id}
            stayRendered
            defaultHeight={100}
            visibleOffset={200}
          >
            <Card content={item} />
          </RenderIfVisible>
        ))}
      <div ref={observerTarget} className={styles.observedContainer}>
        {options?.loading && <Loader />}
        {options?.error && <p>Error: {options?.error}</p>}
      </div>
    </ul>
  );
};

export default CardList;
