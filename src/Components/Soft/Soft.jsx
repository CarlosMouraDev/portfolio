import styles from "./Soft.module.css"

export default function Soft({ src, alt, title, children }) {
  return <div className={styles.container}>
    <img className={styles.image} src={src} alt={alt} />
    <p className={styles.title}>{title}</p>
    <p className={styles.desc}>{children}</p>
  </div>
}