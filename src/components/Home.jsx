import React from "react";
import Hero from "./HomeComponents/Hero.jsx";
import About from "./HomeComponents/About.jsx";
import Join from "./HomeComponents/Join.jsx";
import "../App.css";

function Home() 
{
  return (
    <div className="App">
        <Hero />
        <About />
        <Join />
    </div>
  );
}

export default Home;
