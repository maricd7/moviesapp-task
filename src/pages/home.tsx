import React from "react";
import ResultsGrid from "../components/ResultsGrid/ResultsGrid";
import Heading from "../components/common/Heading/Heading";
import SubHeading from "../components/common/SubHeading/SubHeading";
import Search from "../components/Search/Search";

function Home() {
  return (
    <div className="container">
      <header>
        <Heading />
        <SubHeading />
      </header>
      <main>
        <Search/>
        <ResultsGrid />
      </main>
    </div>
  );
}

export default Home;
