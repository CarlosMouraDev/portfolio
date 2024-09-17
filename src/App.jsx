import React from "react";
import Gravity from "./Components/Gravity/Gravity";
import ReverseGravity from "./Components/ReverseGravity/ReverseGravity";
import "./App.css";
import TitleGeneral from "./Components/TitleGeneral/TitleGeneral";

const App = () => (
  <div className="App">
    <Gravity />
    <TitleGeneral>Sobre mim</TitleGeneral>
    <ReverseGravity />
  </div>
);

export default App;
