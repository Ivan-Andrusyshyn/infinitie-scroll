import { Title } from "components";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Title name={"React Infinite Scroll"} />
    </div>
  );
};
export default Header;
