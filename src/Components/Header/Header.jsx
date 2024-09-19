import styles from "./Header.module.css"
import useMedia from "../Hooks/useMedia";
import { useState } from "react";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobile = useMedia("(max-width: 40rem)");

  return (
    <header>
      <nav>
        <a href="#top" onClick={() => setMobileMenu(false)} end>
          <img className={styles.rocket} src="/assets/foguete.png" alt="foguete" />
        </a>
      </nav>
      <nav>
        {mobile && (
          <button
            aria-label="Menu"
            className={`${styles.mobileButton} ${
              mobileMenu && styles.mobileButtonActive
            }`}
            onClick={() => setMobileMenu(!mobileMenu)}
          ></button>
        )}
        <nav
          className={`${mobile ? styles.navMobile : styles.nav} ${
            mobileMenu && styles.navMobileActive
          }`}
        >
          <a href="#about" onClick={() => setMobileMenu(false)}>
            Sobre mim
          </a>
          <a href="#skills" onClick={() => setMobileMenu(false)}>
            Habilidades
          </a>
          <a href="#projects" onClick={() => setMobileMenu(false)}>
            Projetos
          </a>
          <a href="#social" onClick={() => setMobileMenu(false)}>
            Contato
          </a>
        </nav>
      </nav>
    </header>
  );
}
