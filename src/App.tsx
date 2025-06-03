
import React from "react";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Values from "./components/Values";
import Work from "./components/Work";
import AIFuture from "./components/AIFuture";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-serif bg-gradient-to-br from-[#f5f5f5] to-[#faf7f2] text-gray-800">
      <Hero />
      <Story />
      <Values />
      <Work />
      <AIFuture />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;
