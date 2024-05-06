import React,{} from "react";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import Nav from "../components/Nav/Nav";


function Details(){
  return (
    <div className="details_container">
        <Nav />
        <main>
        {<MovieDetails /> }
        </main>
    </div>
  );
}

export default Details;
