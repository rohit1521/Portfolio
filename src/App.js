import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import Interactions from "./components/Interactions";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import TechStacks from "./components/TechStacks";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Landing />
      <Interactions />
      <Projects />
      <Articles />
      <TechStacks />
      <Footer />
    </div>
  );
}

export default App;
