import styles from "./Header.module.css";
import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.appHeader}>

      <div className={styles.header}>
        <h1>🎙️ Podcast App</h1>
      </div>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/favourites"
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          Favourites
        </NavLink>
      </nav>

      <div className={styles.rightSide}>
        <ThemeToggle />
      </div>

    </header>
  );
}