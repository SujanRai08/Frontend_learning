import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <main className="relative">
        <Navbar />
      </main>
      <div className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </div>
    </>
  );
};

export default App;
