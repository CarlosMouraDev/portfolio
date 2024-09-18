import styles from "./Tec.module.css"

export default function Tec({ src, alt, title }) {
  return <div className={styles.container}>
    <img className={styles.image} src={src} alt={alt} />
    <p className={styles.title}>{title}</p>
  </div>
}