import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMovieContext } from "../../contexts/MoviesContext";
import styles from "./MovieDetails.module.css";
import { useParams } from "react-router-dom"; // Import useParams hook
import YouTube from "react-youtube";
import Heading from "../common/Heading/Heading";
import DetailsHeading from "../common/DetailsHeading/DetailsHeading";
import Paragraph from "../common/Paragraph/Paragraph";
import Genre from "../common/Genre/Genre";
import DetailsHeader from "./DetailsHeader/DetailsHeader";
import DetailsOverview from "./DetailsOverview/DetailsOverview";

interface MovieDetailsProps {
  text: string;
  genre: string;
  index: number;
  genresArray:{name:string,original_name:string}[]
}
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
    console.log("fetch dataaaa", paramsType);
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
    console.log(params);
    console.log("params.type", params.type);
    fetchData();
    getTrailer();
  }, [paramsType, id, tab]);

  console.log(details, "detelj");

  return (
    <div className={styles.detailsHeaderContainer}>
      {details ? (
        <div>
          <DetailsHeader
            trailer={trailer}
            details={details}
            image={"https://image.tmdb.org/t/p/w500/" + details.backdrop_path}
          />
          {details && <DetailsOverview details={details}  genresArray={genres} original_name={details.original_name || details.name || ''} text={details.original_name || details.name} />}
        </div>
      ) : (
        <>Loading</>
      )}
    </div>
  );
}

export default MovieDetails;