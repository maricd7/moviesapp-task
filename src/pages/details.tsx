import React from "react";
import { MovieDetails, Footer, Nav } from "../components";

const Details = () => {
  return (
    <div className="details_container">
      <Nav />
      <main>{<MovieDetails />}</main>
      <Footer />
    </div>
  );
};

export default Details;
