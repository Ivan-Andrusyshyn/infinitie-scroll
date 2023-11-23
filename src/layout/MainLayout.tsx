import { CardList, Header, SelectList } from "components";

import styles from "./styles.module.css";

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <SelectList />
      <CardList />
    </div>
  );
};

export default MainLayout;
