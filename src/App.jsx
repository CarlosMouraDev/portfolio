import React from "react";
import Gravity from "./Components/Gravity/Gravity";
import ReverseGravity from "./Components/ReverseGravity/ReverseGravity";
import "./App.css";
import TitleGeneral from "./Components/TitleGeneral/TitleGeneral";
import AnimeEarth from "./Components/Anime/AnimeEarth";
import Reveal from "./Components/Reveal/Reveal";
import Tec from "./Components/Tec/Tec";

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
          <AnimeEarth className="anime" />
        </div>
        <div className="tec">
          <TitleGeneral>Tecnologias</TitleGeneral>
          <Reveal>
          <div className="tecContainer">
            <Tec
              src="/assets/javascript.png"
              alt="javascript"
              title="JavaScript"
            />
            <Tec
              src="/assets/typescript.png"
              alt="typescript"
              title="TypeScript"
            />
            <Tec src="/assets/html.webp" alt="html" title="HTML" />
            <Tec src="/assets/css.svg" alt="css" title="CSS" />
            <Tec src="/assets/react.webp" alt="react" title="React" />
            <Tec src="/assets/next.png" alt="next" title="Next.js" />
            <Tec
              src="/assets/bootstrap.png"
              alt="bootstrap"
              title="Bootstrap"
            />
            <Tec src="/assets/sass.png" alt="sass" title="Sass" />
            <Tec src="/assets/node.webp" alt="node" title="Node.js" />
            <Tec src="/assets/postgre.png" alt="postgre" title="PostgreSQL" />
            <Tec src="/assets/mongo.svg" alt="mongo" title="MongoDB" />
          </div>
          </Reveal>
        </div>
      </div>
    </div>
    <ReverseGravity />
  </div>
);

export default App;
