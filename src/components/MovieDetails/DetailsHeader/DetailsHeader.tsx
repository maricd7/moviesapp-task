import React from "react";
import styles from "./DetailsHeader.module.css";
import YouTube from "react-youtube";

interface DetailsHeaderInterface {
  trailer: string;
  details: object;
  image: string;
}

const DetailsHeader = ({ trailer, details, image }: DetailsHeaderInterface) => {
  return (
    <header className={styles.detailsHeader}>
      {" "}
      {!trailer && details ? (
        <img alt="Header" className={styles.headerImage} src={image} />
      ) : (
        <YouTube
          className={styles.videoTrailer}
          videoId={trailer}
          opts={{ width: "100%", height: "480px" }}
        />
      )}
    </header>
  );
};

export default DetailsHeader;
