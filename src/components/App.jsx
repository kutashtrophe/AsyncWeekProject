import React from "react";
import Navbar from "./Navbar.jsx";
import ThreeComponent from "./ThreeComponent.jsx";
import AboutMe from "./AboutMe.jsx";
import Projects from "./Projects.jsx";

function App() {
  return (
    <div className="App">
      <ThreeComponent />
      <Navbar />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
