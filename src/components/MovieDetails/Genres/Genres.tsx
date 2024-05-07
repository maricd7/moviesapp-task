import React from "react";
import styles from "./Genres.module.css";
import Genre from "../../common/Genre/Genre";

interface genresContainerProps {
  text: string;
}

const Genres = ({ text }:genresContainerProps) => {
  return (
    <div className={styles.genresContainer}>
      <Genre text={text} />
    </div>
  );
};

export default Genres;
