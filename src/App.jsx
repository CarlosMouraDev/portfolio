import React from "react";
import Gravity from "./Components/Gravity/Gravity";
import ReverseGravity from "./Components/ReverseGravity/ReverseGravity";
import "./App.css";
import TitleGeneral from "./Components/TitleGeneral/TitleGeneral";
import AnimeEarth from "./Components/Anime/AnimeEarth";
import Reveal from "./Components/Reveal/Reveal";

const App = () => (
  <div className="App">
    <Gravity />
    <div className="content">
      <div className="content2">
        <TitleGeneral>Sobre mim</TitleGeneral>
        <div className="about">
          <Reveal>
            <p>
              Meu nome é Carlos Eduardo, sou um programador apaixonado por
              resolver desafios e por praticar esportes, especialmente vôlei.
              Atualmente, estou cursando Análise e Desenvolvimento de Sistemas,
              com foco no desenvolvimento web. JavaScript é minha linguagem de
              programação favorita, e é nela que decidi me especializar. Meus
              principais objetivos são me tornar um programador de destaque e
              alcançar fluência em inglês.
            </p>
          </Reveal>
          <AnimeEarth className="anime"/>
        </div>
      </div>
    </div>
    <ReverseGravity />
  </div>
);

export default App;
