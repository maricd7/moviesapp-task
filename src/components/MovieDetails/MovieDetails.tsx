import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMovieContext } from "../../contexts/MoviesContext";
import styles from "./MovieDetails.module.css";
import { useParams } from "react-router-dom"; // Import useParams hook

interface MovieDetailsProps {
  id: string;
}

function MovieDetails({}: MovieDetailsProps) {
  const { type,tab } = useMovieContext();
  const { id } = useParams(); // Use useParams to get URL parameters
  const [details, setDetails] = useState<any>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}`,
        {
          params: { language: "en-US" },
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
          },
        }
      );
      response.data !==null ?  setDetails(response.data): console.log(response.data, "Error response");
    }
    catch (error) {
      console.error(error);
      console.log('error fetching'
      )
    }
  };
  
//laod data on mount
  useEffect(() => {
    console.log("type", type);
    type.length ?  fetchData(): console.log('error fethcing')
  }, [type,id,tab]); 
  


  return (
    <div>
      <header>
        {details ? <img className={styles.headerImage} src={"https://image.tmdb.org/t/p/w500/"+ details.backdrop_path} /> : <></>}
      </header>
    </div>
  );
}

export default MovieDetails;
