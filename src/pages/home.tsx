import React from "react";
import ResultsGrid from "../components/ResultsGrid/ResultsGrid";
import Heading from "../components/common/Heading/Heading";
import SubHeading from "../components/common/SubHeading/SubHeading";

function Home() {
  return (
    <div className="container">
      <header>
        <Heading />
        <SubHeading />
      </header>
      <main>
        <ResultsGrid />
      </main>
    </div>
  );
}

export default Home;
