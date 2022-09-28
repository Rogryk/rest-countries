import React, { useState } from "react";
import ThemeContext from "./theme-context";

interface IThemeProvider {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<IThemeProvider> = (props) => {
  const [theme, setTheme] = useState("dark");
  const toggleThemeHandler = () => {
    setTheme(themeContext.theme === "light" ? "dark" : "light");
  };

  const themeContext = {
    theme: theme,
    toggleTheme: toggleThemeHandler,
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
