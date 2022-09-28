import React, { useState } from "react";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import styles from "./App.module.css";
import "./components/layout/colorTheme.css";
import ThemeProvider from "./components/store/ThemeProvider";

const App: React.FC = () => {
  const [themekColor, setThemeColor] = useState<"light" | "dark">("dark");

  const toggleDarkModeHandler = () => {
    setThemeColor((prev) => (prev === "light" ? "dark" : "light"));
  };

  const classList = `${styles.app} ${themekColor}`;

  return (
    <div className={classList}>
      <ThemeProvider>
        <Header
          toggleDarkMode={toggleDarkModeHandler}
          colorMode={themekColor}
        />
        <Body colorMode={themekColor} />
      </ThemeProvider>
    </div>
  );
};

export default App;
