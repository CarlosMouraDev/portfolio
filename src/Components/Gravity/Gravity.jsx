import styles from "./Gravity.module.scss";
import me from "/assets/me.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import DownloadIcon from "/assets/downloadIcon.png"

const Gravity = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.parallaxSection}>
      <div id={styles.stars}></div>
      <div id={styles.stars2}></div>
      <div id={styles.stars3}></div>
      <div id={styles.horizon}>
        <div className={styles.glow}></div>
      </div>
      <div id={styles.earth}></div>
      <div className={styles.container}>
        <div className={styles.content1}>
          <img
            
            data-aos-duration="700"
            data-aos="zoom-in"
            className={styles.image}
            src={me}
            alt="Minha foto"
          />
          <p
            data-aos-duration="700"
            data-aos="zoom-in"
            className={styles.name}
          >
            Carlos Eduardo
          </p>
        </div>
        <div className={styles.content2}>
          <h1 data-aos="zoom-in-left" data-aos-duration="700">
            Programador Full-Stack
          </h1>
          <p data-aos="zoom-out-left" data-aos-duration="700">
            Estou buscando minha primeira vaga de trabalho como desenvolvedor
            full-stack para adentrar no mercado e conseguir experiências tanto
            na programação quanto no trabalho em equipe! 🚀
          </p>
          <a
            className={styles.cv}
            href="/assets/curriculo.pdf"
            download="carlos-curriculo.pdf"
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-anchor-placement="top-bottom"
          >
          CV <img className={styles.download} src={DownloadIcon} alt="Icone download" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gravity;
