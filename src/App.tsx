import React, { useState } from "react";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import styles from "./App.module.css";

const App: React.FC = () => {
  const [themekColor, setThemeColor] = useState<"light" | "dark">("dark");

  const toggleDarkModeHandler = () => {
    setThemeColor((prev) => (prev === "light" ? "dark" : "light"));
  };

  const classList = `${styles.app} ${themekColor}`;

  return (
    <div className={classList}>
      <Header toggleDarkMode={toggleDarkModeHandler} colorMode={themekColor} />
      <Body colorMode={themekColor} />
    </div>
  );
};

export default App;
