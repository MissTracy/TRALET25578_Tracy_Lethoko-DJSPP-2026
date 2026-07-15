import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className={styles.appHeader}>
      <h1>🎙️ Podcast App</h1>
    
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </nav>
      <ThemeToggle />
      <div className={styles.spacer}></div>

    </header>
  );
}
