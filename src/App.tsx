import React from "react";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import ThemeProvider from "./store/ThemeProvider";
import "./layout/colorTheme.css";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Header />
      <Body />
    </ThemeProvider>
  );
};

export default App;
