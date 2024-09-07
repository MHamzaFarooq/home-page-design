import React from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Cards from "./components/Cards";
import Options from "./components/Options";

const Page = () => {
  return (
    <>
      <Header />
      <main className="p-10">
        <Title />
        <Cards />
        <Options />
      </main>
    </>
  );
};

export default Page;
