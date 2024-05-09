import React from "react";
import { Heading, SubHeading } from "../components/common";
import { Search, ResultsGrid } from "../components";
import Layout from "../layout";

const Home = () => {
  return (
    <Layout>
      <div className="container">
        <header>
          <Heading text="ScreenQuest" />
          <SubHeading />
        </header>
        <main>
          <Search />
          <ResultsGrid />
        </main>
      </div>
    </Layout>
  );
};

export default Home;
