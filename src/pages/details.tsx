import React,{} from "react";
import { useParams } from "react-router-dom";

import MovieDetails from "../components/MovieDetails/MovieDetails";

function Details() {
   


  return (
    <div className="details_container">
        <nav>
        </nav>
        <main>
        {<MovieDetails /> }
        </main>
    </div>
  );
}

export default Details;
