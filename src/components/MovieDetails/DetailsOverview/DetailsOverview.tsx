import React from "react";
import styles from "./DetailsOverview.module.css";
import DetailsHeading from "../../common/DetailsHeading/DetailsHeading";
import Genre from "../../common/Genre/Genre";
import Paragraph from "../../common/Paragraph/Paragraph";

interface Details {
  original_name?: string;
  name?: string;
  overview?: string;
  text: string;
  title: string;
}
interface DetailsOverviewInterface {
  details: Details;
  original_name: string;
  text: string;
  genresArray: { name: string }[];
}

const DetailsOverview = ({
  details,
  genresArray,
}: DetailsOverviewInterface) => {
  return (
    <div className={styles.overview}>
      <DetailsHeading
        text={details.original_name || details.name || details.title || ""}
      />
      <div className={styles.genreContainer}>
        {genresArray.map((genre: { name: string }, index: number) => (
          <Genre key={index} text={genre.name} />
        ))}
      </div>

      {details.overview && <Paragraph text={details.overview} />}
    </div>
  );
};

export default DetailsOverview;
