// ReverseGravity.js
import React from "react";
import styles from "./ReverseGravity.module.scss";

const ReverseGravity = () => {
  return (
    <div className={styles.parallaxSection}>
      <div id={styles.stars}></div>
      <div id={styles.stars2}></div>
      <div id={styles.stars3}></div>
      <div id={styles.horizon}>
        <div className={styles.glow}></div>
      </div>
      <div id={styles.earth}></div>
      <div className={styles.content}>
      </div>
    </div>
  );
};

export default ReverseGravity;
