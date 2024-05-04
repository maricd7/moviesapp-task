import React, { useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useMovieContext } from "../../contexts/MoviesContext";
import Tab from "../Tab/Tab";
import styles from './ResultsGrid.module.css'


function ResultsGrid() {

//interface for card
  interface Movie {
    id: number;
    name: string;
    image: string;
    description: string;
    original_title:string;
    poster_path:string;
  }


  // getting data from context
  const { data } = useMovieContext();

  return (
    <div className={styles.mainContainer}>
      <Tab />
      <ul className={styles.cardsContainer}>
      {data.length ? (
        data.map((entry: Movie, index: number) => (
          <li><MovieCard key={index} name={entry.name || entry.original_title} image={'https://image.tmdb.org/t/p/w500/'+entry.poster_path}/></li>
        ))
      ) : (
        <span>Loading</span>
      )}
      </ul>
    </div>
  );
}

export default ResultsGrid;
