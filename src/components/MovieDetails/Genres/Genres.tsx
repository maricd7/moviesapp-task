import React from "react";
import styles from "./Genres.module.css";
import Genre from "../../common/Genre/Genre";

interface genresContainerProps {
  text: string;
}

const Genres: React.FC<genresContainerProps> = ({ text }) => {
  return (
    <div className={styles.genresContainer}>
      <Genre text={text} />
    </div>
  );
};

export default Genres;
