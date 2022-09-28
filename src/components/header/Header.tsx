import React, { useContext } from "react";
import ToggleBtn from "../UI/ToggleBtn";
import styles from "./Header.module.css";
import ThemeContext from "../store/theme-context";

interface IHeader {
  toggleDarkMode: () => void;
  colorMode?: "light" | "dark";
}

const Header: React.FC<IHeader> = (props) => {
  const themeCtx = useContext(ThemeContext);
  console.log(themeCtx.theme);

  const colorMode = props.colorMode || "light";

  return (
    <header className={`${styles.header} ${themeCtx.theme}`}>
      <h3>Where in the world?</h3>
      <ToggleBtn onClick={props.toggleDarkMode} />
    </header>
  );
};

export default Header;
