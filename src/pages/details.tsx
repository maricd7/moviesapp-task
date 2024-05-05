import React,{} from "react";
import { useNavigate } from "react-router-dom";

import MovieDetails from "../components/MovieDetails/MovieDetails";

function Details() {
   
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <div className="details_container">
        <nav>
          <button onClick={goBack}>Back</button>
        </nav>
        <main>
        {<MovieDetails /> }
        </main>
    </div>
  );
}

export default Details;
