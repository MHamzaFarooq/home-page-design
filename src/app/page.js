import Cards from "@/components/Cards";
import Header from "@/components/Header";
import Options from "@/components/Options";
import Title from "@/components/Title";
import React from "react";


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
