import React from "react";
import Genre from "../../common/Genre/Genre";

interface genresContainerProps {
  text: string;
}

const Genres = ({ text }: genresContainerProps) => {
  return <Genre text={text} />;
};

export default Genres;
