import React from "react";
import styles from "./MovieCard.module.css";
import { Icon } from "@iconify/react";

interface MovieCardProps {
  name: string;
  image: string;
  overview: string;
  rating:number
}

const MovieCard = ({ name, image, overview,rating }:MovieCardProps) => {
  const text = overview.substring(0, 100) + "...";
  let ratingFixed = rating.toFixed(1)
  return (
    <div className={styles.cardMain}>
      <img alt="Card Poster" className={styles.image} src={image} />
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.cardOverview}>{text}</p>
      <p className={styles.rating}><Icon icon="material-symbols:star-rate" width="24" height="24"  style={{color: '#ffb83d'}} />{ratingFixed}</p>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default MovieCard;
