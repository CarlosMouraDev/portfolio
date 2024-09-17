import styles from "./TitleGeneral.module.scss";
import Reveal from "../Reveal/Reveal"

const TitleGeneral = ({children}) => {
  return (
    <div className={styles.container}>
      <Reveal><p className={styles.lineText}>{children}</p></Reveal>
      <div class={styles.line}></div>
    </div>
  );
};

export default TitleGeneral;
