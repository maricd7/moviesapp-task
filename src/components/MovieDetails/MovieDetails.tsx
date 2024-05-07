import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMovieContext } from "../../contexts/MoviesContext";
import styles from "./MovieDetails.module.css";
import { useParams } from "react-router-dom"; 
import DetailsHeader from "./DetailsHeader/DetailsHeader";
import DetailsOverview from "./DetailsOverview/DetailsOverview";
import Backdrop from "./Backdrop/Backdrop";


function MovieDetails() {
  const { tab } = useMovieContext();
  const { id } = useParams(); // Use useParams to get type param to have consistent loads since some ids are the same for movies and tv
  const [details, setDetails] = useState<any>(null);
  const [trailer, setTrailer] = useState("");
  const params = useParams();
  const [paramsType, setParamsType] = useState(params.type);
  const [genres, setGenres] = useState<{ name: string }[]>([]);

  //getting data for movie/tv show
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${paramsType}/${id}`,
        {
          params: { language: "en-US" },
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
          },
        }
      );
      if (response.data !== null) {
        setDetails(response.data);
        setGenres(response.data?.genres);
      } else {
        console.log("Error response");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // function for getting trailer for movie
  const getTrailer = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${paramsType}/${id}/videos`,
        {
          params: { language: "en-US" },
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
          },
        }
      );
      setTrailer(response.data?.results?.[0].key);
    } catch (error) {
      console.error(error);
    }
  };

  //laod data on mount
  useEffect(() => {
    fetchData();
    getTrailer();
  }, [paramsType, id, tab]);


  return (
    <div className={styles.detailsHeaderContainer}>
      {details ? (
        <div className={styles.headerDetails}>
          <DetailsHeader
            trailer={trailer}
            details={details}
            image={"https://image.tmdb.org/t/p/w500/" + details.backdrop_path}
          />
          {details && <DetailsOverview details={details}  genresArray={genres} original_name={details.original_name || details.name || ''}  text={details.original_name || details.name} />}
        </div>
       
      ) : (
        <>Loading</>
      )}
       {details && <Backdrop path={details.backdrop_path}/>}
    </div>
  );
}

export default MovieDetails;
