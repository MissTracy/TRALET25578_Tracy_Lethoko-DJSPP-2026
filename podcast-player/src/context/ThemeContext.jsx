import { createContext, useEffect, useState } from "react";

/**
 * Context for managing the application's theme.
 */
export const ThemeContext = createContext();

/**
 * Provides theme state and toggle functionality.
 *
 * @param {{children: React.ReactNode}} props
 * @returns {JSX.Element}
 */
export function ThemeProvider({ children }) {
/**
 * Initializes the saved theme from localStorage.
 */
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  /**
 * Updates the document theme and saves it.
 */
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) =>
      current === "light" ? "dark" : "light"
    );
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}