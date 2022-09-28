import React, { useState } from "react";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import styles from "./App.module.css";
import "./components/layout/colorTheme.css";
import ThemeProvider from "./components/store/ThemeProvider";

const App: React.FC = () => {
  const [themeColor, setThemeColor] = useState<"light" | "dark">("dark");

  const toggleDarkModeHandler = () => {
    setThemeColor((prev) => (prev === "light" ? "dark" : "light"));
  };

  const classList = `${styles.app} ${styles.dark}`;

  return (
    <div className={classList}>
      <ThemeProvider>
        <Header toggleDarkMode={toggleDarkModeHandler} colorMode={themeColor} />
        <Body colorMode={themeColor} />
      </ThemeProvider>
    </div>
  );
};

export default App;
