import React from "react";
import Gravity from "./Components/Gravity/Gravity";
import ReverseGravity from "./Components/ReverseGravity/ReverseGravity";
import AboutMe from "./Components/AboutMe/AboutMe";
import "./App.css";

const App = () => (
  <div className="App">
    <Gravity />
    <div className="AppMidle">
      <AboutMe/>
    </div>
    <ReverseGravity />
  </div>
);

export default App;
