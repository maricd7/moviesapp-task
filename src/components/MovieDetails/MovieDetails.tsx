import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMovieContext } from "../../contexts/MoviesContext";

interface MovieDetailsProps {
  id: string;
}

function MovieDetails({ id }: MovieDetailsProps) {
  const {tab } = useMovieContext();
  const [type,setType] = useState('')
  const [details,setDetails] =  useState<any>(null);
    console.log(details)
  
  useEffect(() => {
    tab === 'shows' ? setType('tv') : setType('movie')
    const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/${type}/${Number(id)}`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
        },
      };
    
      axios
        .request(options)
        .then( (response)=> {
          console.log(response.data);
          setDetails(response.data)
         
        })
        .catch(function (error) {
          console.error(error);
        });
  }, [type,id]);



  return <div>
    {details ? details.backdrop_path : <></>}
    asdasd
  </div>;
}

export default MovieDetails;
