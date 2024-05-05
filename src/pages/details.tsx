import React,{} from "react";
import { useParams } from "react-router-dom";

import MovieDetails from "../components/MovieDetails/MovieDetails";

function Details() {
    const { id } = useParams<{ id?: string }>();


  return (
    <div>
        <nav>
        </nav>
        <main>
        {id ? <MovieDetails id={id} /> : <p>Loading...</p>}
        </main>
    </div>
  );
}

export default Details;
