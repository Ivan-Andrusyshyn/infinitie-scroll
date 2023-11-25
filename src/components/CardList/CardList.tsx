import { FC, useContext, useRef } from "react";
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

  const ESTIMATED_ITEM_HEIGHT = 10;

  return (
    <ul className={styles.cardList}>
      {options?.results &&
        options?.results.map((item: CharacterResult) => (
          <RenderIfVisible
            initialVisible={isVisible}
            root={document.body}
            defaultHeight={ESTIMATED_ITEM_HEIGHT}
            key={item.id}
            visibleOffset={document.body.clientHeight}
          >
            <Card content={item} />
          </RenderIfVisible>
        ))}
      <li ref={observerTarget} className={styles.observedContainer}>
        {options?.loading && <Loader />}
        {options?.error && <p>Error: {options?.error}</p>}
      </li>
    </ul>
  );
};

export default CardList;
