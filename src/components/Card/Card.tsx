import { Result } from "types/type";
import styles from "./styles.module.css";

interface Props {
  character: Result;
}

const Card = ({ character }: Props) => {
  return (
    <li className={styles.card}>
      <img
        src={character.image}
        alt={character.name}
        width={50}
        loading="lazy"
      />
      <p>{character.name}</p>
    </li>
  );
};

export default Card;
