import React from "react";
import { MovieDetails } from "../components";
import Layout from "../layout";

const Details = () => {
  return (
    <Layout>
      <div className="details_container">
        <main>{<MovieDetails />}</main>
      </div>
    </Layout>
  );
};

export default Details;
