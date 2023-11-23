import React, { ReactNode } from "react";

import styles from "./styles.module.css";

interface Props {
  name: string;
}

const Title: React.FC<Props> = ({ name }) => {
  return <h1 className={styles.title}>{name}</h1>;
};

export default Title;
