import React from "react";
import { useMovieContext } from "../../contexts/MoviesContext";
import Tab from "../Tab/Tab";
import styles from "./ResultsGrid.module.css";
import { Link } from "react-router-dom";
import { MovieCard } from "../MovieCard";
import Searching from "../common/Searching/Searching";
import { Movie } from "../../types/MovieInterface";

const ResultsGrid = () => {
  const { type } = useMovieContext();

  // getting data from context
  const { data } = useMovieContext();
  return (
    <div className={styles.mainContainer}>
      <Tab />
      <ul className={styles.cardsContainer}>
        {data.length &&
          data.map((entry: Movie, index: number) => (
            <li key={index}>
              <Link to={`/details/${type}/${entry.id}`}>
                <MovieCard
                  name={entry.name || entry.original_title || entry.title}
                  image={"https://image.tmdb.org/t/p/w500/" + entry.poster_path}
                  overview={entry.overview}
                  rating={entry.vote_average}
                />
              </Link>
            </li>
          ))}
      </ul>
      {!data.length && <Searching />}
    </div>
  );
};

export default ResultsGrid;
