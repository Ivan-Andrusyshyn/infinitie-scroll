import { Result } from "types/type";
import styles from "./styles.module.css";

interface Props {
  character: Result;
}

const Card = ({ character }: Props) => {
  console.log(character);

  return (
    <li className={styles.card}>
      <img src={character.image} alt={character.name} loading="lazy" />
      <div className={styles.wrapper}>
        <p>Name: {character.name}</p>
        <p>Species: {character.species || "--"}</p>
        <p>Type: {character.type || "--"}</p>
        <p>Gender: {character.gender || "--"}</p>
      </div>
    </li>
  );
};

export default Card;
