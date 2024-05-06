import React from "react";
import styles from "./MovieCard.module.css";

interface MovieCardProps {
  name: string;
  image: string;
  overview: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ name, image, overview }) => {
  const text = overview.substring(0, 77) + "...";
  return (
    <div className={styles.cardMain}>
      <img className={styles.image} src={image} />
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.cardOverview}>{text}</p>
    </div>
  );
};

export default MovieCard;
