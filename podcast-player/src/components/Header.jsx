import styles from "./Header.module.css";
import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";


/**
 * Displays the application's main navigation bar.
 *
 * Provides navigation links and a theme toggle.
 *
 * @returns {JSX.Element}
 */
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