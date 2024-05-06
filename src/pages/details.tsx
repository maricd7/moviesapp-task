import React from "react";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

function Details() {
  return (
    <div className="details_container">
      <Nav />
      <main>{<MovieDetails />}</main>
      <Footer />
    </div>
  );
}

export default Details;
