import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useMovieContext } from "../../contexts/MoviesContext";
import Tab from "../Tab/Tab";
import styles from "./ResultsGrid.module.css";
import { Link } from "react-router-dom";

function ResultsGrid() {
  //interface for card
  interface Movie {
    id: number;
    name: string;
    image: string;
    description: string;
    original_title: string;
    poster_path: string;
    title: string;
  }

  // getting data from context
  const { data } = useMovieContext();
  console.log("data data data", data);
  return (
    <div className={styles.mainContainer}>
      <Tab />
      <ul className={styles.cardsContainer}>
        {data.length ? (
          data.map((entry: Movie, index: number) => (
            <li key={index}>
              <Link to={`/details/${entry.id}`}>
              <MovieCard
                name={entry.name || entry.original_title || entry.title}
                image={"https://image.tmdb.org/t/p/w500/" + entry.poster_path}
              />
              </Link>
            </li>
          ))
        ) : (
          <span>Loading</span>
        )}
      </ul>
    </div>
  );
}

export default ResultsGrid;
