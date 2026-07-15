
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import styles from "./ThemeToggle.module.css";

/**
 * Toggles between light and dark themes.
 *
 * @returns {JSX.Element}
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
    className={styles.themeButton}
    onClick={toggleTheme}
    >
    {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
}