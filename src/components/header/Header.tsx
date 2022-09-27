import React from "react";
import ToggleBtn from "../UI/ToggleBtn";
import styles from "./Header.module.css";

interface IHeader {
  toggleDarkMode: () => void;
  colorMode?: "light" | "dark";
}

const Header: React.FC<IHeader> = (props) => {
  const colorMode = props.colorMode || "light";

  return (
    <header
      className={`${styles.header} ${
        colorMode === "light" ? styles.light : styles.dark
      }`}
    >
      <h3>Where in the world?</h3>
      <ToggleBtn onClick={props.toggleDarkMode} />
    </header>
  );
};

export default Header;
