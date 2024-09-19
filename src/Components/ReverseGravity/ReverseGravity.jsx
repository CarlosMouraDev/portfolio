// ReverseGravity.js
import React from "react";
import styles from "./ReverseGravity.module.scss";
import Reveal from "../Reveal/Reveal";

const ReverseGravity = () => {
  return (
    <div id="social" className={styles.parallaxSection}>
      <div id={styles.stars}></div>
      <div id={styles.stars2}></div>
      <div id={styles.stars3}></div>
      <div id={styles.horizon}>
        <div className={styles.glow}></div>
      </div>
      <div id={styles.earth}></div>
      <div className={styles.content}></div>
      <div className={styles.container}>
        <Reveal>
          <h1>Mãos à obra? Vamos construir algo extraordinário!</h1>
        </Reveal>
        <div className={styles.contact}>
        <Reveal>
          <a href="https://github.com/CarlosMouraDev" target="_blank">
            <img
              className={styles.ghub}
              src="/assets/github.png"
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/carlos-eduardo-moura-lemes-163651270/"
            target="_blank"
          >
            <img
              className={styles.linkedin}
              src="/assets/linkedin.png"
              alt="linkedin"
            />
          </a>
          </Reveal>
        </div>
        <p>Email: cadumouralemes@gmail.com</p>
      </div>
      <div className={styles.copyright}>
        <p>
          Desenvolvido por: Carlos Eduardo Moura. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default ReverseGravity;
