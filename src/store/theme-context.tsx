import React from "react";

interface IThemeContext {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = React.createContext({
  theme: "dark",
  toggleTheme: () => {},
});

export default ThemeContext;
