import React from "react";
import { Heading, SubHeading } from "../components/common";
import { Footer, Search, ResultsGrid } from "../components";

const Home = () => {
  return (
    <div className="container">
      <header>
        <Heading text="ScreenQuest" />
        <SubHeading />
      </header>
      <main>
        <Search />
        <ResultsGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
