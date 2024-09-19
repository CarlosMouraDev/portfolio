import styles from "./TitleGeneral.module.scss";
import Reveal from "../Reveal/Reveal";

const TitleGeneral = ({ id, children }) => {
  return (
    <div className={styles.container} id={id}>
      <Reveal>
        <p className={styles.lineText}>{children}</p>
      </Reveal>
      <div className={styles.line}></div>
    </div>
  );
};

export default TitleGeneral;
