import styles from "./Project.module.css";

export default function Project({ href, src, alt, title, children, ghub }) {
  return (
    <div className={styles.container}>
      <a href={href} target="_blank">
        <img className={styles.image} src={src} alt={alt} />
      </a>
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{children}</p>
        <div className={styles.btns}>
          <a href={href} target="_blank">
            <button className={styles.btn}>Site</button>
          </a>
          <a href={ghub} target="_blank">
            <button className={styles.btn}>Código</button>
          </a>
        </div>
      </div>
    </div>
  );
}
